import {ref} from 'vue'
import axios from 'axios'


export defaults function useAuth()
{
  let posts = ref([])
  const fetchPosts = async ()=> {
      try {
          const resp = await axios.get("kdkkdkdk")
          posts.value = resp.data.data
      } catch (err) {
          console.log(err)
      }
  }

  return {
    posts,
    fetchPosts
  }
}