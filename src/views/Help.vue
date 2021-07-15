<template>
  <app-page back title="Помощь">
    <question-item
      v-for="q in questions"
      :key="q.title"
      :question="q"
    />
  </app-page>
</template>

<script>
import AppPage from '../components/ui/AppPage'
import QuestionItem from '../components/question/QuestionItem'

export default {
  setup () {
    const questions = [
      { title: 'Что есть в данной системе?', text: 'Тут есть все, что необходимо для работы с заявками' },
      { title: 'Как тут работает авторизация?', text: 'Все работает через FIREBASE' },
    ]
    
    return { questions }
  },
  components: { AppPage, QuestionItem },
}
</script>
