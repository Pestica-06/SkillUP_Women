// Fetch JSON data from the external file
fetch('./Home.Json')
  .then(response => response.json())
  .then(data => {
    // Populate the Courses section
    const coursesList = document.getElementById("courses-list");
    data.courses.forEach(course => {
        const courseCard = document.createElement("div");
        courseCard.classList.add("course-card");

        courseCard.innerHTML = `
            <div class="course-img">
                <i class="${course.icon}"></i>
            </div>
            <div class="course-content">
                <h3>${course.title}</h3>
                <p>${course.description}</p>
                <div>
                    ${course.badges.map(badge => `<span class="badge">${badge}</span>`).join('')}
                </div>
                <div style="margin-top: 15px;">
                    <a href="${course.link}" class="btn">Learn More</a>
                </div>
            </div>
        `;

        coursesList.appendChild(courseCard);
    });

    // Populate the Jobs section
    const jobsList = document.getElementById("jobs-list");
    data.jobs.forEach(job => {
        const jobCard = document.createElement("div");
        jobCard.classList.add("job-card");

        jobCard.innerHTML = `
            <div class="job-title">
                <div>
                    <h3>${job.title}</h3>
                    <div class="job-company">
                        <i class="fas fa-building"></i> ${job.company}
                    </div>
                </div>
                <span class="job-type">${job.type}</span>
            </div>

            <div class="job-details">
                <p><i class="fas fa-briefcase"></i> ${job.type}</p>
            </div>

            <a href="${job.link}" class="btn apply-btn">Apply Now</a>
        `;

        jobsList.appendChild(jobCard);
    });
  })
  .catch(error => {
    console.error('Error loading the JSON data:', error);
  });
