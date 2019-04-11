const fetchUnansweredQuestions = createSelector(
    state => state.questions,
    state => Object.keys(state.users[state.authedUser].answers),
    state => Object.keys(state.questions),
    (questions, answeredQuestions, questionsId) =>
      questionsId
        .filter(id => !answeredQuestions.includes(id))
        .sort((a, b) => questions[b].timestamp - questions[a].timestamp)
  )


  const fetchAnsweredQuestions = createSelector(
    state => state.questions,
    state => Object.keys(state.users[state.authedUser].answers),
    (questions, answers) =>
      answers.sort((a, b) => questions[b].timestamp - questions[a].timestamp)
  )

  export default {
      fetchAnsweredQuestions,
      fetchUnansweredQuestions
  }