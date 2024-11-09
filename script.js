document.addEventListener('DOMContentLoaded', () => {
    // Select the buttons and containers for schools (education section)
    const addSchoolButton = document.getElementById('add-school-btn');
    const schoolsContainer = document.getElementById('schools-container');

    // Select the buttons and containers for skills (expertise section)
    const addSkillButton = document.getElementById('add-skill-btn');
    const skillsContainer = document.getElementById('skills-container');

    // Select the buttons and containers for languages (language section)
    const addLanguageButton = document.getElementById('add-language-btn');
    const languagesContainer = document.getElementById('language-container');

    // Select the buttons and containers for hobbies (hobbies section)
    const addHobbyButton = document.getElementById('add-hobby-btn');
    const hobbiesContainer = document.getElementById('hobby-container');

    const addAwardButton = document.getElementById('add-award-btn');
    const awardsContainer = document.getElementById('award-container');

    // Function to limit input fields to a maximum of 5
    function addInputField(container, name, placeholder) {
        const inputs = container.querySelectorAll('input');
        if (inputs.length < 5) {  // Check if the number of inputs is less than 5
            const newInput = document.createElement('input');
            newInput.setAttribute('type', 'text');
            newInput.setAttribute('name', name);  // Makes it an array in PHP
            newInput.setAttribute('placeholder', placeholder);
            container.appendChild(newInput);

        }
    }

    // Add a new school input when the "Add Another School" button is clicked
    addSchoolButton.addEventListener('click', () => {
        addInputField(schoolsContainer, 'school[]', 'Another educational institution');
    });

    // Add a new skill input when the "Add more" button is clicked
    addSkillButton.addEventListener('click', () => {
        addInputField(skillsContainer, 'skill[]', 'Another skill');
    });

    // Add a new language input when the "Add more" button is clicked
    addLanguageButton.addEventListener('click', () => {
        addInputField(languagesContainer, 'language[]', 'Another language');
    });

    // Add a new hobby input when the "Add more" button is clicked
    addHobbyButton.addEventListener('click', () => {
        addInputField(hobbiesContainer, 'hobby[]', 'Another hobby');
    });

    addAwardButton.addEventListener('click', () => {
        addInputField(awardsContainer, 'award[]', 'Another award');
    });
});