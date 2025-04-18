'use client'
import { 
    Box, Typography, Paper, Table, TableBody, TableCell, 
    TableContainer, TableHead, TableRow, Button, 
    IconButton, Dialog, DialogTitle, DialogContent, 
    DialogActions, TextField, MenuItem, Snackbar, Alert,
    Avatar, Chip
  } from '@mui/material'
  import React, { useState } from 'react'
  import { Add as AddIcon, Edit as EditIcon, Delete as DeleteIcon, Close as CloseIcon } from '@mui/icons-material'
  
  interface User {
    id: number
    name: string
    email: string
    role: string
    avatar?: string
    registrationDate: string
  }
  
  const UsersPage = () => {
    // Состояние для списка пользователей
    const [users, setUsers] = useState<User[]>([
      {
        id: 1,
        name: 'Администратор',
        email: 'admin@example.com',
        role: 'Admin',
        registrationDate: '2023-01-15',
        avatar: '/avatars/admin.png'
      },
      {
        id: 2,
        name: 'Менеджер',
        email: 'manager@example.com',
        role: 'Manager',
        registrationDate: '2023-02-20'
      },
      {
        id: 3,
        name: 'Пользователь',
        email: 'user@example.com',
        role: 'User',
        registrationDate: '2023-03-10'
      }
    ])
  
    // Состояние для диалога добавления/редактирования
    const [openDialog, setOpenDialog] = useState(false)
    const [currentUser, setCurrentUser] = useState<User | null>(null)
    const [isEdit, setIsEdit] = useState(false)
  
    // Состояние для уведомлений
    const [snackbar, setSnackbar] = useState({
      open: false,
      message: '',
      severity: 'success' as 'success' | 'error' | 'info' | 'warning'
    })
  
    // Состояние для поиска
    const [searchTerm, setSearchTerm] = useState('')
  
    // Роли пользователей
    const roles = ['Admin', 'Manager', 'User']
  
    // Отфильтрованные пользователи
    const filteredUsers = users.filter(user => 
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.role.toLowerCase().includes(searchTerm.toLowerCase())
    )
  
    // Обработчики
    const handleAddUser = () => {
      setCurrentUser({
        id: 0,
        name: '',
        email: '',
        role: 'User',
        registrationDate: new Date().toISOString().split('T')[0]
      })
      setIsEdit(false)
      setOpenDialog(true)
    }
  
    const handleEditUser = (user: User) => {
      setCurrentUser(user)
      setIsEdit(true)
      setOpenDialog(true)
    }
  
    const handleDeleteUser = (id: number) => {
      setUsers(users.filter(user => user.id !== id))
      showSnackbar('Пользователь удален', 'success')
    }
  
    const handleSaveUser = () => {
      if (!currentUser) return
  
      if (isEdit) {
        setUsers(users.map(user => user.id === currentUser.id ? currentUser : user))
        showSnackbar('Пользователь обновлен', 'success')
      } else {
        const newId = Math.max(...users.map(u => u.id)) + 1
        setUsers([...users, { ...currentUser, id: newId }])
        showSnackbar('Пользователь добавлен', 'success')
      }
  
      setOpenDialog(false)
    }
  
    const showSnackbar = (message: string, severity: 'success' | 'error' | 'info' | 'warning') => {
      setSnackbar({ open: true, message, severity })
    }
  
    const handleCloseSnackbar = () => {
      setSnackbar({ ...snackbar, open: false })
    }
  
    return (
      <>
        <Box sx={{ mb: 4 }}>
          <Typography variant="h4" gutterBottom>
            Пользователи
          </Typography>
          <Typography variant="body1">
            Управление учетными записями пользователей и правами доступа
          </Typography>
        </Box>
  
        <Paper sx={{ p: 2, mb: 3 }}>
          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center', 
            mb: 2,
            gap: 2,
            flexWrap: 'wrap'
          }}>
            <Typography variant="h6">Список пользователей</Typography>
            
            <Box sx={{ display: 'flex', gap: 2 }}>
              <TextField
                size="small"
                placeholder="Поиск пользователей..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Button 
                variant="contained" 
                startIcon={<AddIcon />}
                onClick={handleAddUser}
              >
                Добавить пользователя
              </Button>
            </Box>
          </Box>
  
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell>Пользователь</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Роль</TableCell>
                  <TableCell>Дата регистрации</TableCell>
                  <TableCell>Действия</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredUsers.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell>{user.id}</TableCell>
                    <TableCell>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <Avatar 
                          src={user.avatar} 
                          alt={user.name}
                          sx={{ width: 40, height: 40 }}
                        />
                        {user.name}
                      </Box>
                    </TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>
                      <Chip 
                        label={user.role} 
                        color={
                          user.role === 'Admin' ? 'error' : 
                          user.role === 'Manager' ? 'warning' : 'primary'
                        }
                        size="small"
                      />
                    </TableCell>
                    <TableCell>{user.registrationDate}</TableCell>
                    <TableCell>
                      <IconButton 
                        color="primary" 
                        onClick={() => handleEditUser(user)}
                      >
                        <EditIcon />
                      </IconButton>
                      <IconButton 
                        color="error" 
                        onClick={() => handleDeleteUser(user.id)}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
  
        {/* Диалог добавления/редактирования пользователя */}
        <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
          <DialogTitle>
            {isEdit ? 'Редактировать пользователя' : 'Добавить пользователя'}
            <IconButton
              aria-label="close"
              onClick={() => setOpenDialog(false)}
              sx={{
                position: 'absolute',
                right: 8,
                top: 8,
                color: (theme) => theme.palette.grey[500],
              }}
            >
              <CloseIcon />
            </IconButton>
          </DialogTitle>
          <DialogContent>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, pt: 2 }}>
              <TextField
                label="Имя"
                value={currentUser?.name || ''}
                onChange={(e) => setCurrentUser({ ...currentUser!, name: e.target.value })}
                fullWidth
              />
              <TextField
                label="Email"
                type="email"
                value={currentUser?.email || ''}
                onChange={(e) => setCurrentUser({ ...currentUser!, email: e.target.value })}
                fullWidth
              />
              <TextField
                select
                label="Роль"
                value={currentUser?.role || 'User'}
                onChange={(e) => setCurrentUser({ ...currentUser!, role: e.target.value })}
                fullWidth
              >
                {roles.map((role) => (
                  <MenuItem key={role} value={role}>
                    {role}
                  </MenuItem>
                ))}
              </TextField>
            </Box>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpenDialog(false)}>Отмена</Button>
            <Button variant="contained" onClick={handleSaveUser}>
              Сохранить
            </Button>
          </DialogActions>
        </Dialog>
  
        {/* Уведомления */}
        <Snackbar
          open={snackbar.open}
          autoHideDuration={6000}
          onClose={handleCloseSnackbar}
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        >
          <Alert 
            onClose={handleCloseSnackbar} 
            severity={snackbar.severity}
            sx={{ width: '100%' }}
          >
            {snackbar.message}
          </Alert>
        </Snackbar>
      </>
    )
  }
  
  export default UsersPage