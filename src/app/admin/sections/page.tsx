import { Box, Typography, Paper, List, ListItem, ListItemText, Button, TextField, Divider } from '@mui/material'
import React from 'react'
import AddIcon from '@mui/icons-material/Add'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'

const SectionsPage = () => {
    return (
        <>
            <Box sx={{ mb: 4 }}>
                <Typography variant="h4" gutterBottom>
                    Разделы
                </Typography>
                <Typography variant="body1">
                    Управление категориями и разделами новостей
                </Typography>
            </Box>

            <Paper sx={{ p: 2, mb: 3 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                    <Typography variant="h6">Добавить новый раздел</Typography>
                </Box>

                <Box component="form" sx={{ display: 'flex', gap: 2, mb: 3 }}>
                    <TextField
                        label="Название раздела"
                        variant="outlined"
                        size="small"
                        fullWidth
                    />
                    <Button variant="contained" startIcon={<AddIcon />}>
                        Добавить
                    </Button>
                </Box>

                <Divider sx={{ my: 2 }} />

                <List>
                    <ListItem
                        secondaryAction={
                            <Box sx={{ display: 'flex', gap: 1 }}>
                                <Button size="small" startIcon={<EditIcon />}>Изменить</Button>
                                <Button size="small" startIcon={<DeleteIcon />} color="error">Удалить</Button>
                            </Box>
                        }
                    >
                        <ListItemText
                            primary="Политика"
                            secondary="Новости политики и государственного управления"
                        />
                    </ListItem>
                    {/* Другие разделы */}
                </List>
            </Paper>
        </>
    )
}

export default SectionsPage