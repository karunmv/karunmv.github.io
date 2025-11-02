export const siteConfig = {
  name: "Karun Manoj Varghese",
  title: "Final Year Student at the University of Maine, Orono",
  description: "Portfolio website of Karun Manoj Varghese",
  accentColor: "#1d4ed8",
  social: {
    email: "karun.varghese@maine.edu",
    linkedin: "https://linkedin.com/in/karunmv/",
    // twitter: "https://x.com/rfitzio",
    github: "https://github.com/karunmv",
  },
  aboutMe:
    "I have been passionate about robotics since I was 9 years old and have been pursuing that goal ever since. From attending a camp that piqued my interest in this field, to tinkering with Arduinos to make small bots of my own, to now working on industrial and research projects in reputed institutions, I have constantly strived to broaden my horizons and challenge myself to solve bigger and harder problems. I have established myself as a reliable leader capable of managing teams ranging from 10-50 members and efficiently solving problems using that man power to successfully complete the project in hand.",
  skills: ["Python", "C", "C++", "Matlab", "Java", "ROS2", "Gazebo", "Verilog", "MySQL", "Assembly", "Docker", "HTML/CSS", "JavaScript", "jinja2", "Flask", "bash", "sklearn", "PyTorch", "NumPy", "pandas", "LaTeX", "SolidWorks", "KiCad" ],
projects: [
  {
    name: "MasterPrint LAAM Simulation (Current)",
    description:
      "Developed a realistic digital twin of the world’s largest 3D printer using SolidWorks, ROS2, and Gazebo. Implemented a ROS2 skill server leveraging ros2_control to enable dynamic printhead switching and homing procedures. Simulated coordinated robotic arm operations to correct extrusion errors, improving efficiency and operational safety.",
    //link:"https://karunmv.github.io/project-masterprint",
    link:"https://composites.umaine.edu/advanced-manufacturing/masterprint/",
    skills: ["SolidWorks", "ROS2", "Gazebo", "ros2_control", "Python", "Docker"],
  },
  {
    name: "Multi-Robot Coordination for Lunar ISRU (Current)",
    description:
      "Researching coordination algorithms for heterogeneous robot teams performing excavation and transport tasks on the lunar surface. Evaluating system reliability under communication loss and robot malfunction scenarios, and proposing lightweight, fault-tolerant methods to enhance robustness with minimal computational overhead.",
    //link:"https://karunmv.github.io/project-honors",  
    link:"https://docs.google.com/presentation/d/1ipGB_JOv0L-3Q4rSChD6IGOZ5hb4pHw1qSnV-Iiti8Q/edit?usp=sharing",
    skills: ["ROS2", "Python", "C++", "Multi-Robot Systems", "Autonomous Systems", "Algorithm Design"],
  },
  {
    name: "University Rover Challenge (Current)",
    description:
      "Team Lead for UMaine’s URC 2026 team designing a Mars rover capable of autonomous navigation, SLAM, and object detection. Overseeing software development with ROS2, hardware interfacing, computer vision (OpenCV, YOLO), control systems, and team logistics including outreach and funding.",
    //link:"https://karunmv.github.io/project-urc",
    link:"https://urc.marssociety.org/",
    skills: ["ROS2", "OpenCV", "YOLO", "C++", "Python", "SLAM", "Control Systems", "Systems Engineering"],
  },
  {
    name: "NASA Lunabotics (2025 Finalist)",
    description:
      "Led UMaine’s Lunabotics team to finalist position in the 2025 NASA competition. Developed a rover capable of constructing a lunar berm, integrating autonomy (navigation and control), video streaming, teleoperation, and robust communication systems (UART, WiFi). Managed systems engineering, power design, and team coordination.",
    //link:"https://karunmv.github.io/project-lunabotics",
    link:"https://github.com/karunmv/xarm_nodes",
    skills: ["ROS2", "Python", "C++", "Autonomy", "Teleoperation", "Systems Engineering", "WiFi", "UART"],
  },
  {
    name: "Robotic Arm Localization",
    description:
      "Worked on localizing a UFactory xArm using a Basler camera and AprilTags. Utilized MoveIt2 for motion planning and Foxglove for visualization. Developed a custom Docker environment for scalable deployment of multiple arms supporting LAAM printers.",
    //link:"https://karunmv.github.io/project-robot-arm",
    link:"https://github.com/karunmv/xarm_nodes",    
    skills: ["ROS2", "MoveIt2", "Foxglove", "Basler Camera", "AprilTags", "Docker", "Python"],
  },
    {
    name: "NASA Eclipse Project",
    description:
      "Contributed to the NASA Eclipse Project, where I developed a multi-camera real-time video streaming system in Python and C for high-altitude balloon missions. I integrated camera payloads with embedded systems for atmospheric data collection and supported payload setup, testing, and flight operations to ensure reliable mission performance.",
    //link:"https://karunmv.github.io/project-robot-arm",
    link:"https://scholar.google.com/citations?view_op=view_citation&hl=en&user=he-7bbYAAAAJ&citation_for_view=he-7bbYAAAAJ:u5HHmVD_uO8C",    
    skills: ["Python", "C", "HAM Radio", "Scientific Ballooning", "Research Paper Writing", "Conference Presentation"],
  },
  {
    name: "Estimating Wild Blueberry Plant Health using Machine Learning Techniques",
    description:
      "I developed UAV automation systems to collect and analyze agricultural data for crop monitoring applications. Using machine learning frameworks such as PyTorch and Scikit-Learn, I built models to estimate wild blueberry health and yield from aerial imagery. This work earned me the CUGR Fellowship, funded by the NASA-affiliated Maine Space Grant Consortium (MSGC), in recognition of outstanding undergraduate research.",
    //link:"https://karunmv.github.io/project-robot-arm",
    link:"https://docs.google.com/presentation/d/1PemGjIoqzGKGrZNtgpuDvgKHUEbvK_bgv9an4Fzg63Y/edit?usp=sharing",    
    skills: ["Python", "C", "HAM Radio", "Scientific Ballooning", "Research Paper Writing", "Conference Presentation"],
  },
],

experience: [
  {
    company: "Advanced Structures and Composites Center, University of Maine",
    title: "Robotics Intern",
    dateRange: "May 2024 - Present",
    bullets: [
      "Upgraded and built new robotic sensor integrations for various Large Additive Manufacturing (LAAM) and 3D Printing devices, including the world’s largest 3D printer",
      "Developed and deployed software using Python, ROS2, and Docker to enhance robotic automation and data acquisition systems",
      "Collaborated with multidisciplinary engineering teams to test, calibrate, and optimize robotic systems for advanced manufacturing research",
    ],
  },
  {
    company: "High Altitude Ballooning Lab, University of Maine",
    title: "Undergraduate Research Assistant",
    dateRange: "Jan 2023 - Aug 2024",
    bullets: [
      "Designed and implemented a multi-camera real-time video streaming system using Python and C for NASA-funded high-altitude balloon missions",
      "Integrated camera payloads with embedded systems for data collection during atmospheric research flights",
      "Contributed to the NASA Eclipse Project by assisting in payload setup, testing, and flight operations",
    ],
  },
  {
    company: "Computer Vision and Autonomous Robotics Lab, University of Maine",
    title: "Undergraduate Research Assistant",
    dateRange: "Sep 2022 - May 2024",
    bullets: [
      "Developed UAV automation systems to collect and analyze agricultural data for crop monitoring applications",
      "Applied machine learning frameworks including PyTorch and Scikit-Learn to estimate wild blueberry health and yield from aerial imagery",
      "Awarded the CUGR Fellowship funded by the NASA-affiliated Maine Space Grant Consortium (MSGC) for outstanding undergraduate research",
    ],
  },
],
  education: [
    {
      school: "University of Maine",
      degree: "Bachelor of Science in Computer Engineering",
      dateRange: "2022-",
      achievements: [
        "3.957 GPA",
        "Dean's List all semesters",
        "Minors in Math and Robotics",
        "President of Robotics Club and IEEE Student Branch",
      ],
    },
    {
      school: "Indian Institute Of Technology, Madras",
      degree: "Bachelor Of Science in Data Science and Applications",
      dateRange: "2022-",
      achievements: [
        // "Completed 500+ hours of coursework",
        // "Built 10+ portfolio projects",
        // "Specialized in React and Node.js",
      ],
    },
  ],
};
