import './css/Experience.css';

function Experience() {
  return (
    <div className="ExperienceContainer">
        <div className="Experience">
            <h1>Farm Credit Financial Partners</h1>
            <h2>Software Engineer</h2>
            <h3>May 2020 - Present</h3>
            <ul>
                <li>Took the lead role on a large data extraction, transformation and load process from a relational database to Salesforce environment.</li>
                <li>Completed user stories and resolved bugs while onboarding customer to a new application.</li>
                <li>Worked with both on-premise/cloud technologies (SQL, SSIS, C# Azure Functions) to enhance internal and external applications.</li>
                <li>Resolved customer’s ServiceNow incidents by reviewing code changes, data conditions or documenting application defects where appropriate.</li>
                <li>Participated in support rotations to ensure that QA environments remained functional.</li>
            </ul>
        </div>
        <div className="Experience">
            <h1>Farm Credit Financial Partners</h1>
            <h2>Software Engineer - Intern</h2>
            <h3>June 2019 - May 2020</h3>
            <ul>
                <li>Improved build and deploy process for many Developer, QA and Production databases.</li>
                <li>Designed and implemented a cloud application that automatically generates support tickets.</li>
                <li>Participated in daily stand-ups, review meetings and presentations to strengthen my understanding of the software development life cycle.</li>
            </ul>
        </div>
    </div>
  );
}

export default Experience;
