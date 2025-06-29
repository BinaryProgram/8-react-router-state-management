const getApplyJobApplications = () => {
  const storeJobApplication = localStorage.getItem("job-application");
  if (storeJobApplication) {
    return JSON.parse(storeJobApplication);
  }
  return [];
};

const saveApplyJobApplications = (applyId) => {
  const saveJobApplication = getApplyJobApplications();
  const idExist = saveJobApplication.find((storeId) => storeId === applyId);
  if (!idExist) {
    saveJobApplication.push(applyId);
    localStorage.setItem('job-application',JSON.stringify(saveJobApplication));
  }
};
export { saveApplyJobApplications,getApplyJobApplications };
