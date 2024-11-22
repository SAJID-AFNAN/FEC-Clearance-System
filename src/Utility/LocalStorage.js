const getStoredJobApplication = () => {
    const storedApplication = localStorage.getItem('job-application')
    if (storedApplication) {
        return JSON.parse(storedApplication)
    }
    else {
        return []
    }
}

const saveJobApplication = id => {
    const getJobApplication = getStoredJobApplication()
    const exits = getJobApplication.find(JobId => JobId === id)
    if (!exits) {
        getJobApplication.push(id)
        localStorage.setItem('job-application', JSON.stringify(getJobApplication))
    }
}

export { getStoredJobApplication, saveJobApplication }