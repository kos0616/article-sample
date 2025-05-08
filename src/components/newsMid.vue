<script setup lang="ts">
import { onMounted, ref } from 'vue'
import News, { type TypeNews } from '@/Service/News/List'

const props = defineProps({
  title: {
    type: String,
    // default: 'HOT AI NEWS',
  },
  query: {
    type: String,
  },
})

const news = ref<TypeNews[]>([])

const getNews = async () => {
  const res = await News({ query: props.query, pageSize: '5' })
  if (Array.isArray(res.articles) && res.articles.length > 0) {
    news.value = res.articles
  } else {
    alert('No news available')
  }
}

onMounted(() => {
  getNews()
})
</script>

<template>
  <article>
    <h2 class="font-bold border-b-2 mb-3 pb-1">{{ title }}</h2>
    <ul>
      <li v-for="(item, index) in news" :key="index" class="mb-3 border-b border-gray-300 pb-3">
        <a
          :href="item.url"
          :title="item.content"
          target="_blank"
          rel="noopener noreferrer"
          class="hover:underline hover:text-teal-500 flex gap-2"
        >
          <img :src="item.urlToImage" class="size-30 object-cover rounded-xl" />
          <h3 class="line-clamp-3">{{ item.title }}</h3>
        </a>
      </li>
    </ul>
  </article>
</template>
