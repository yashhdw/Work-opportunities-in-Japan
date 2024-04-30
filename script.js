
// code for populating jobs

var cobtn = document.getElementById("conbtn");

cobtn.addEventListener('click', () => {
    document.querySelector(".joblistings").style.display = 'none';
    Jobs.forEach((e)=>{
        document.getElementsByClassName("jobslist")[0].innerHTML +=  ` <div id="bghj" class="card ml-1 mt-2 mb-2 " >
            <div class="card-body">
                <h2 class="card-title">${e.title}</h2>
                <h4 class="card-subtitle mb-2 text-body-secondary">${e.company}</h4>
                <p class="card-text">${e.location}</p>
                 <div> ${e.Description}</div>
                 
                 
            <div class="btn">
                <button id="bluebtn">Apply </button>
            </div>
                
            </div>
        </div>`

    })
     
});




// Function for dynamically providing options based on selection 

function updateOptions() {
    var domainSelect = document.getElementById("Domain");
    var subdomainSelect = document.getElementById("Subdomain");
    var selectedDomain = domainSelect.value;
    subdomainSelect.innerHTML = ""; // Clear previous options

    // Add options based on the selected domain
    if (selectedDomain === "IT") {
        addOption(subdomainSelect, "Software Developer", "Software Developer");
        addOption(subdomainSelect, "Network Engineer", "Network Engineer");
        addOption(subdomainSelect, "Systems Administrator", "Systems Administrator");
    } else if (selectedDomain === "Healthcare") {
        addOption(subdomainSelect, "Doctor", "Doctor");
        addOption(subdomainSelect, "Nurse", "Nurse");
        addOption(subdomainSelect, "Pharmacist", "Pharmacist");
    } else if (selectedDomain === "Finance") {
        addOption(subdomainSelect, "Accountant", "Accountant");
        addOption(subdomainSelect, "Financial Analyst", "Financial Analyst");
        addOption(subdomainSelect, "Investment Banker", "Investment Banker");
    } else if (selectedDomain === "Education") {
        addOption(subdomainSelect, "Teacher", "Teacher");
        addOption(subdomainSelect, "Professor", "Professor");
        addOption(subdomainSelect, "School Administrator", "School Administrator");
    }
    // we can add more else-if blocks for other domains

    // Function to add an option to the select element
    function addOption(selectElement, text, value) {
        var option = document.createElement("option");
        option.textContent = text;
        option.value = value;
        selectElement.appendChild(option);
    }
}


 

//                                      API request for fetching jobs Exhausted 



// async function fetchJobListings(apiKey) {
//     try {
//         const apiUrl = 'https://jobs-api14.p.rapidapi.com/list?query=Web%20Developer&location=United%20States&distance=1.0&language=en_GB&remoteOnly=false&datePosted=month&employmentTypes=fulltime%3Bparttime%3Bintern%3Bcontractor&index=0';
//         const response = await fetch(apiUrl, {
//             headers: {
//                 'Authorization': `Bearer ${apiKey}`
//             }
//         });
//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }
//         const data = await response.json();
//         // Process data and display job listings
//         console.log(data);
//     } catch (error) {
//         console.error('Error fetching job listings:', error);
//     }
// }

// // Call function to fetch job listings with API key
// const apiKey = 'c7df201e91msh82e7e3a4d9d62fep158e27jsnd4e98993eb82';
// async function main() {

//     await fetchJobListings(apiKey);
// }


// main()









const Jobs = [
    {
        title: 'Software Engineer',
        company: 'Tech Co. Tokyo',
        location: 'Tokyo, Japan',
        Description: 'Design, develop, and maintain software systems, applying engineering principles to solve complex problems, improve efficiency, and create reliable, scalable, and user-friendly applications.'
    },
    {
        title: 'Marketing Manager',
        company: 'Marketing Inc. Osaka',
        location: 'Osaka, Japan',
        Description: 'Develop and execute strategic marketing plans to drive brand awareness, customer engagement, and sales growth. Manage campaigns, analyze market trends, and collaborate cross-functionally to achieve business objectives.'
    },
    {
        title: 'Data Analyst',
        company: 'Data Solutions Co.',
        location: 'Fukuoka, Japan',
        Description: 'Analyze complex data sets to provide insights and support decision-making processes. Develop and implement data-driven strategies to optimize business operations and improve performance.'
    },
    {
        title: 'UX Designer',
        company: 'Creative Designs Ltd.',
        location: 'Nagoya, Japan',
        Description: 'Create intuitive and visually appealing user experiences for web and mobile applications. Conduct user research, design wireframes and prototypes, and collaborate with development teams to implement design solutions.'
    },
    {
        title: 'Sales Representative',
        company: 'SalesForce Japan',
        location: 'Sapporo, Japan',
        Description: 'Identify and pursue sales opportunities, build relationships with clients, and negotiate contracts to achieve sales targets. Provide excellent customer service and support to maximize client satisfaction and retention.'
    },
    {
        title: 'Product Manager',
        company: 'Product Innovations Inc.',
        location: 'Yokohama, Japan',
        Description: 'Lead product development initiatives from conception to launch, defining product vision, strategy, and roadmap. Coordinate cross-functional teams, prioritize features, and gather customer feedback to drive product success.'
    },
    {
        title: 'Human Resources Specialist',
        company: 'HR Solutions Japan',
        location: 'Kobe, Japan',
        Description: 'Manage recruitment processes, employee relations, and HR policies to support organizational objectives and foster a positive work environment. Provide guidance on HR-related matters and ensure compliance with labor laws.'
    },
    {
        title: 'Financial Analyst',
        company: 'Finance Experts Ltd.',
        location: 'Kyoto, Japan',
        Description: 'Conduct financial analysis, forecasting, and modeling to support strategic decision-making and business planning. Interpret financial data, identify trends, and provide recommendations to optimize financial performance.'
    },
    {
        title: 'Content Writer',
        company: 'Content Creations Japan',
        location: 'Hiroshima, Japan',
        Description: 'Produce engaging and informative content for various platforms including websites, blogs, and social media channels. Research topics, write compelling copy, and adhere to brand guidelines and style standards.'
    },
    {
        title: 'Customer Support Specialist',
        company: 'Support Solutions Co.',
        location: 'Sendai, Japan',
        Description: 'Provide assistance and resolution to customer inquiries, issues, and complaints via phone, email, and chat. Maintain a high level of customer satisfaction through prompt and effective communication and problem-solving.'
    },

];