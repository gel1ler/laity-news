import React from 'react'
import { NewsCard } from './card';
import { newsArticles } from '@/db/dummyData';

const News = () => {
  return (
    <div className='flex flex-col gap-10'>
      {newsArticles.map(arcticle =>
        <NewsCard size='wide' data={arcticle} key={arcticle.id} />
      )}
    </div>
  )
}

export default News