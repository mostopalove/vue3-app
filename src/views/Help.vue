<template>
  <app-page back title="Help">
    <question-item
        v-for="q in questions"
        :key="q.title"
        :question="q"
    ></question-item>
  </app-page>
</template>

<script>
  import AppPage from '../components/ui/AppPage'
  import QuestionItem from '../components/question/QuestionItem'
  export default {
    name: 'Help',
    components: {QuestionItem, AppPage},
    setup() {
      const questions = [
        {
          title: 'What is this app for?',
          text: 'To create, update and delete requests.'
        },
        {
          title: 'What technologies are used in this application?',
          text: 'This app uses Vue 3 and firebase as database.'
        }
      ]

      return {
        questions
      }
    }
  }
</script>

<style scoped>

</style>
