import banner01 from './banner-01.png';
import blogs01 from './blogs-01.jpg';
import blogs02 from './blogs-02.jpg';
import blogs03 from './blogs-03.jpg';
import blogs04 from './blogs-04.jpg';
import blogs05 from './blogs-05.jpg';
import blogs06 from './blogs-06.jpg';

export const banners = {
    banner01,
}

export const realArticles = [
    {
        _id: '67c8a1b9f0e1d2c3b4a59876',
        title: 'How Google is Using AI to Combat Deepfakes in Elections',
        authorname: 'Serena Chen',
        date: '2025-10-29',
        category: 'Technology',
        image : blogs01,
        description: [
            { heading: 'The AI Threat Landscape', text: 'Recent advances in generative AI have made the creation of highly convincing deepfake videos and audio a significant threat to democratic processes globally. Misinformation campaigns are expected to escalate leading up to major elections.' },
            { heading: 'New Detection Models', text: 'Google DeepMind announced the launch of a new multimodal AI model, "TruthSeeker," designed to analyze video, audio, and contextual metadata to detect manipulated content with a reported 98% accuracy rate. It is being deployed across YouTube and other platforms.' },
            { heading: 'Policy and Transparency', text: 'The company is also rolling out stricter disclosure policies requiring creators to clearly label synthetic or manipulated content, with penalties for non-compliance. This focuses on increasing transparency for consumers.' }
        ]
    },
    {
        _id: '1e3f5d7b9a2c4e6f8a0b1c2d',
        title: 'Market Reacts to Unexpected Hike in US Interest Rates',
        authorname: 'Michael O’Connell',
        date: '2025-10-28',
        category: 'Finance',
        image : blogs02,
        description: [
            { heading: 'Federal Reserve Announcement', text: 'The Federal Reserve surprised analysts with a 50 basis point hike to the benchmark interest rate, citing persistent inflationary pressures and a unexpectedly resilient job market. This was the largest single hike in over a year.' },
            { heading: 'Stock and Bond Markets', text: 'The Dow Jones Industrial Average fell sharply by over 400 points following the news. Treasury bond yields also spiked, reflecting increased borrowing costs and market uncertainty about the central bank\'s aggressive stance.' },
            { heading: 'Impact on Housing', text: 'Economists predict the move will further dampen the already slowing housing market, pushing 30-year fixed mortgage rates above 8% for the first time since the early 2000s.' }
        ]
    },
    {
        _id: '9f8e7d6c5b4a3c2d1e0f9g8h',
        title: 'Major Breakthrough in Solid-State Battery Technology',
        authorname: 'Dr. Emily Carter',
        date: '2025-10-27',
        category: 'Science',
        image : blogs03,
        description: [
            { heading: 'New Materials Science', text: 'Researchers at MIT have unveiled a new electrolyte material for solid-state batteries that significantly improves both energy density and charging speed. The design addresses the dendrite issue that has plagued previous solid-state efforts.' },
            { heading: 'Performance Metrics', text: 'The prototype battery demonstrated a 50% increase in energy density compared to current lithium-ion batteries and achieved an 80% charge in less than 10 minutes, making it a potential game-changer for electric vehicles.' },
            { heading: 'Commercial Outlook', text: 'Several major automotive manufacturers have signed partnership agreements to test the technology in their next-generation vehicle platforms, with initial commercial deployment projected for late 2027.' }
        ]
    },
    {
        _id: '4b3a2c1d0e9f8g7h6i5j4k3l',
        title: 'Archaeologists Discover Ancient Temple Ruins in Yucatán',
        authorname: 'Javier Gomez',
        date: '2025-10-26',
        category: 'Archaeology',
        image : blogs04,
        description: [
            { heading: 'Site Location and Initial Findings', text: 'A team working deep within the jungle of the Yucatán Peninsula has unearthed the well-preserved ruins of a previously unknown Maya temple complex, believed to date back to the Late Classic period (600–900 AD).' },
            { heading: 'The Intact Frieze', text: 'The most remarkable discovery is a large, brightly colored stucco frieze depicting a significant mythological scene and a detailed dynastic history. Its preservation is attributed to it being intentionally buried by the Maya themselves.' },
            { heading: 'Future Research', text: 'The find promises to offer new insights into the political and religious life of the late-period Maya civilization, particularly concerning inter-city rivalries and trade routes in the region.' }
        ]
    },
    {
        _id: '7i6h5g4f3e2d1c0b9a8z7y6x',
        title: 'Global Summit on Climate Change Ends with New Emissions Pledge',
        authorname: 'Aisha Khan',
        date: '2025-10-25',
        category: 'News',
        image : blogs05,
        description: [
            { heading: 'The Paris Agreement Addendum', text: 'The UN Climate Change Summit (COP30) concluded with 45 nations agreeing to a non-binding but significant "Net-Zero by 2045" pledge, which is five years earlier than the previous general goal. The pledge targets key industrial sectors.' },
            { heading: 'Disagreement Over Funding', text: 'Progress was stalled by disputes over climate finance, with developing nations criticizing the lack of concrete funding commitments from larger, industrialized countries to aid in their green energy transitions.' },
            { heading: 'Focus on Renewables', text: 'A major takeaway was a renewed focus on accelerating offshore wind energy projects, with a collective commitment to double global capacity by 2030.' }
        ]
    },
    {
        _id: 'a1b2c3d4e5f6g7h8i9j0k1l2',
        title: 'New Programming Language, "Nova," Gains Rapid Adoption',
        authorname: 'Alexei Volkov',
        date: '2025-10-24',
        category: 'Programming',
        image : blogs06,
        description: [
            { heading: 'Designed for Concurrency', text: 'Nova, a new compiled language, is rapidly gaining traction due to its built-in, safe concurrency model inspired by the Actor model. Developers are praising its simplicity and performance in distributed systems.' },
            { heading: 'Ecosystem Growth', text: 'Despite being only a year old, the Nova ecosystem is robust, with major frameworks for web development and data science now available. Its package manager has reported over a million new downloads this month.' },
            { heading: 'Industry Backing', text: 'Several large tech companies, including two major social media firms, have begun migrating critical microservices to Nova, validating its stability and future prospects.' }
        ]
    },
    {
        _id: 'b2c3d4e5f6g7h8i9j0k1l2m3',
        title: 'AI Predicts Next Pandemic Strain with High Accuracy',
        authorname: 'Dr. Lena Rodriguez',
        date: '2025-10-23',
        category: 'Science',
        image : blogs05,
        description: [
            { heading: 'Predictive Genomics', text: 'A global health consortium utilized a sophisticated machine learning model to analyze viral mutation rates and population mobility data, accurately predicting a new variant of the flu virus several months ahead of the traditional prediction cycle.' },
            { heading: 'Vaccine Development', text: 'This early warning allowed pharmaceutical companies to fast-track the design of a targeted vaccine, significantly reducing the anticipated time-to-market and potentially mitigating the severity of the upcoming flu season.' },
            { heading: 'Ethical Concerns', text: 'The deployment of such powerful predictive tools has sparked renewed debate among bioethicists regarding data privacy and the potential for premature panic based on algorithmic forecasts.' }
        ]
    },
    {
        _id: 'c3d4e5f6g7h8i9j0k1l2m3n4',
        title: 'The Unfolding Saga of the Himalayan Temple Artifacts',
        authorname: 'Priya Sharma',
        date: '2025-10-22',
        category: 'Cultural News',
        image : blogs01,
        description: [
            { heading: 'Recovery of Stolen Idols', text: 'The Indian government successfully recovered two 14th-century bronze idols—believed to be of Lord Vishnu and Goddess Lakshmi—stolen from a remote Hindu temple in the Himachal Pradesh region nearly 30 years ago. The artifacts were traced to a private collection in Europe.' },
            { heading: 'Cultural Heritage Law', text: 'The successful recovery is being hailed as a major victory for global efforts to repatriate stolen religious and cultural heritage. It highlights the growing importance of international treaties regarding cultural property.' },
            { heading: 'Temple Security Upgrade', text: 'Local authorities have announced plans to use the high-profile case to fund a comprehensive security upgrade for historically significant, remote Hindu temples across the region.' }
        ]
    },
    {
        _id: 'd4e5f6g7h8i9j0k1l2m3n4o5',
        title: 'E-commerce Giant Announces Shift to 4-Day Work Week for Tech Teams',
        authorname: 'Ben Thompson',
        date: '2025-10-21',
        category: 'Employment',
        image : blogs01,
        description: [
            { heading: 'The Productivity Experiment', text: 'After a six-month pilot program, TechCorp, a major e-commerce player, confirmed it will permanently adopt a four-day, 32-hour work week for all its engineering and product teams, citing improved productivity and employee well-being.' },
            { heading: 'Global Trendsetter', text: 'The announcement positions TechCorp as the largest US-based tech company to fully commit to the compressed schedule. This move is expected to put pressure on competitors to follow suit in the battle for top talent.' },
            { heading: 'Logistics and Challenges', text: 'Initial challenges included coordinating with international teams still on five-day schedules, which required significant restructuring of internal meeting cadences.' }
        ]
    },
    {
        _id: 'e5f6g7h8i9j0k1l2m3n4o5p6',
        title: 'New Study Reveals Surprising Benefits of Blue Light Exposure',
        authorname: 'Dr. Helen Kuo',
        date: '2025-10-20',
        category: 'Health',
        image : blogs01,
        description: [
            { heading: 'Revisiting the Blue Light Myth', text: 'Contrary to years of popular belief, a new comprehensive study suggests that controlled exposure to blue light, particularly in the mid-day, can significantly boost cognitive function and mood in adults.' },
            { heading: 'Impact on Circadian Rhythm', text: 'The research indicates that the key is timing. While late-night exposure disrupts sleep, strategic daytime exposure helps reinforce the body\'s natural circadian rhythm, leading to better sleep quality overall.' },
            { heading: 'Recommendations for Use', text: 'Experts advise using blue light for 30 minutes in the late morning, while still recommending the use of blue-light filters on electronic devices for evening use.' }
        ]
    }
];