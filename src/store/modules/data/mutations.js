export default {
  deleteLabel(state, labelId) {
    state.teamLabels = state.teamLabels.filter(
      (labelObject) => labelObject.id !== labelId
    );
  },
  setTeamQuestions(state, questions) {
    state.teamQuestions = questions;
  },
  addTeamQuestion(state, questionObject) {
    if (questionObject.id === null) {
      console.log("eh die hat keine Id");
      return;
    }
    state.teamQuestions.push(questionObject);
  },
  setTeamLabels(state, labels) {
    state.teamLabels = labels;
  },
  setPublicQuestions(state, questions) {
    state.publicQuestions = questions;
  },
  addNewLabel(state, labelObject) {
    state.teamLabels.push(labelObject);
  },
};
