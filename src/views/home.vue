<script setup lang="ts">
import { onMounted, ref } from 'vue'
import News, { type TypeNews } from '@/Service/News/List'

const news = ref<TypeNews[]>([])

const getNews = async () => {
  const res = await News({ query: 'Apple', pageSize: '10' })
  if (Array.isArray(res.articles) && res.articles.length > 0) {
    news.value = res.articles
  } else {
    alert('No news available')
  }
}

const formatDate = (date: string) => {
  const day = new Date(date)
  return day.toLocaleString()
}

onMounted(() => {
  getNews()
})
</script>

<template>
  <main class="max-w-2xl">
    <section
      v-for="(article, i) in news"
      :key="`article${i}`"
      class="rounded-lg shadow-sm mb-5 border border-gray-200 overflow-hidden"
    >
      <a :href="article.url" target="_blank" class="block group">
        <div class="p-4 pt-6 pb-1">
          <h3
            :href="article.url"
            target="_blank"
            class="mb-3 block text-xl font-bold group-hover:underline"
          >
            {{ article.title }}
          </h3>

          <p class="text-gray-600">{{ article.description }}</p>

          <div class="flex justify-between text-gray-500 mt-3">
            <small>
              <b>{{ article.author }}</b
              >, {{ article.source?.name }}
            </small>
            <small>
              {{ formatDate(article.publishedAt) }}
            </small>
          </div>
        </div>

        <img
          v-if="article.urlToImage"
          :src="article.urlToImage"
          :alt="article.title"
          loading="lazy"
          class="mx-auto"
        />
      </a>
    </section>
  </main>
</template>
