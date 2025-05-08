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
  const res = await News({ query: props.query, pageSize: '6' })
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
    <ul class="grid grid-cols-2 gap-3">
      <li v-for="(item, index) in news" :key="index" class="">
        <a
          :href="item.url"
          :title="item.content"
          target="_blank"
          rel="noopener noreferrer"
          class="hover:underline transition-all hover:ring-2 rounded-md ring-teal-400 overflow-hidden flex gap-2"
        >
          <img :src="item.urlToImage" class="aspect-video object-cover object-center" />
        </a>
      </li>
    </ul>
  </article>
</template>
