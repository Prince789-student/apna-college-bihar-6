const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');

const BASE_URL = 'https://guidenova.in/';

const syllabusLinks = {
  sem1: {
     civil: "Civil-1st-semester-syllabus.html",
    cse: "cse-1syll.html",
    mech: "Mechanical-1st-semester-syllabus.html",
    ee: "Electrical-1st-semester-syllabus.html",
    eee: "Electrical-1st-semester-syllabus.html",
    ece: "Electrical-1st-semester-syllabus.html"
  },
  sem2: {
    civil: "Civil-2nd-semester-syllabus.html",
    mech: "Mechanical-2nd-semester-syllabus.html",
    cse: "Cse-2nd-semester-syllabus.html",
    ee: "Electrical-2nd-semester-syllabus.html",
     eee: "Electrical-2nd-semester-syllabus.html",
     ece: "Electrical-2nd-semester-syllabus.html"
  },
  sem3: {
   civil: "Civil-3rd-semester-syllabus.html",
    mech: "Mechanical-3rd-semester-syllabus.html",
    cse: "Cse-3rd-semester-syllabus.html",
    ee: "Electrical-3rd-semester-syllabus.html",
     eee: "EEE-3rd-semester-syllabus.html",
     ece: "ECE-3rd-semester-syllabus.html"
  },
   sem4: {
     civil: "Civil-4th-semester-syllabus.html",
    mech: "Mechanical-4th-semester-syllabus.html",
    cse: "Cse-4th-semester-syllabus.html",
    ee: "Electrical-4th-semester-syllabus.html",
     eee: "EEE-4th-semester-syllabus.html",
     ece: "ECE-4th-semester-syllabus.html"
   },
  sem5: {
   civil: "Civil-5th-semester-syllabus.html",
    mech: "Mechanical-5th-semester-syllabus.html",
    cse: "Cse-5th-semester-syllabus.html",
    ee: "Electrical-5th-semester-syllabus.html",
     eee: "EEE-5th-semester-syllabus.html",
     ece: "ECE-5th-semester-syllabus.html"
  },
 sem6: {
civil: "Civil-6th-semester-syllabus.html",
    mech: "Mechanical-6th-semester-syllabus.html",
    cse: "Cse-6th-semester-syllabus.html",
    ee: "Electrical-6th-semester-syllabus.html",
     eee: "EEE-6th-semester-syllabus.html",
     ece: "ECE-6th-semester-syllabus.html"
  }
};

const resultData = [];

async function scrapePage(sem, branch, filename) {
    try {
        const url = BASE_URL + filename;
        const response = await axios.get(url);
        const html = response.data;
        const $ = cheerio.load(html);
        
        const TurndownService = require('turndown');
        const turndownService = new TurndownService();
        
        let syllabusText = '';
        
        // Loop over each subject block in the HTML
        $('.subject-title').each((i, el) => {
            const subjectName = $(el).text().trim();
            const contentHtml = $(el).next('.content').html();
            
            if (subjectName && contentHtml) {
                syllabusText += `\n\n## ${subjectName}\n\n`;
                const markdown = turndownService.turndown(contentHtml);
                syllabusText += markdown;
            }
        });
        
        // If there were no .subject-title elements, try fallback parsing using <main>
        if (!syllabusText) {
            const mainContent = $('main').html() || $('body').html();
            if (mainContent) {
                let markdown = turndownService.turndown(mainContent);
                // Clean up generic site content
                markdown = markdown.replace(/GuideNova/g, '');
                syllabusText = markdown;
            }
        }
        
        resultData.push({
            semester: sem,
            branch: branch,
            content: syllabusText.trim()
        });
        
        console.log(`Successfully scraped ${sem} - ${branch}`);
    } catch (err) {
        console.log(`Failed to scrape ${sem} - ${branch}: ${err.message}`);
    }
}

async function run() {
    console.log("Starting scraping...");
    for (const sem of Object.keys(syllabusLinks)) {
        for (const branch of Object.keys(syllabusLinks[sem])) {
            const filename = syllabusLinks[sem][branch];
            await scrapePage(sem, branch, filename);
            // wait a bit to avoid rate limiting
            await new Promise(r => setTimeout(r, 200));
        }
    }
    
    fs.writeFileSync('c:/Users/princ/Downloads/ai/edu-platform-full/client/public/data/syllabus.json', JSON.stringify(resultData, null, 2));
    console.log("Scraping completed! Data saved to syllabus.json");
}

run();
