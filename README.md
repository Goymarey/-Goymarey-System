# Goymarey Project Management System (PMS) 

## Table of Contents
1. [Introduction](#introduction)
2. [Key Features](#key-features)
   - [Internal Use (Team and Admin)](#internal-use-team-and-admin)
   - [Client Use](#client-use)
3. [Technology Stack](#technology-stack)
4. [Future Upgrades](#future-upgrades)
5. [Setup and Installation](#setup-and-installation)
6. [Usage Guidelines](#usage-guidelines)
   - [Internal Use](#internal-use)
   - [Client Use](#client-use)
7. [Contributing](#contributing)
8. [License](#license)
9. [Contact Information](#contact-information)

## Introduction
Welcome to the Goymarey Project Management System (PMS). This README provides a comprehensive overview of the PMS being developed, detailing its features, technology stack, setup instructions, and usage guidelines. The PMS aims to streamline project management processes, enhance team collaboration, and improve client satisfaction.

-----
## Key Features
---
### Internal Use (Team and Admin)

#### Dashboard
- **Overview of Projects**: Provides a summary of all active and completed projects, with key metrics and visual indicators.
- **Quick Access**: Direct links to recent projects, tasks, and milestones.

#### Task Management
- **Task Creation**: Easily create tasks with detailed descriptions, due dates, and assigned team members.
- **Assignment and Tracking**: Assign tasks to team members and track their progress.
- **Priority Levels**: Set priority levels for tasks to ensure critical work is completed first.
- **Progress Tracking**: Visual indicators to show the progress of each task.

#### Milestone Tracking
- **Visual Progress Bar**: Monitor milestones with a visual progress bar, helping teams stay on track with project timelines.

#### Time Tracking
- **Log Hours**: Team members can log hours spent on tasks to help with project planning and resource allocation.
- **Timesheets**: Generate timesheets for review and analysis.
---
### Client Use

#### Client Dashboard
- **Project Overview**: Clients can view the overall progress of their projects, including timelines and deliverables.
- **Detailed Views**: Access to detailed views of project phases and specific tasks.

#### Feedback and Approvals
- **Feedback Section**: Clients can provide feedback on deliverables and request revisions.
- **Approval Process**: Streamlined approval process for project milestones and final deliverables.

#### Invoicing and Payments
- **Integrated Payment System**: Clients can process payments directly through the PMS.
- **Invoice Generation**: Automatic generation of invoices based on completed tasks and milestones.
----
## Technology Stack

- **Frontend**: React.js for an interactive and responsive user interface.
- **Backend**: Node.js for robust API management.
- **Database**: PostgreSQL for efficient data handling and storage.
- **Cloud Integration**: AWS or Google Cloud for secure and scalable file storage.

## Future Upgrades

- **Predictive Analytics**: Implementing AI-driven insights to forecast project completion timelines and resource needs.
- **Mobile App Integration**: Developing dedicated mobile apps for Android and iOS to enable on-the-go project management.
- **Gamification**: Adding features like badges and leaderboards to incentivize team performance and enhance engagement.
----
## Setup and Installation

### Prerequisites
- Node.js
- PostgreSQL
- AWS or Google Cloud account

### Installation Steps

1. **Clone the Repository**
   ```bash
   git clone https://github.com/Goymarey/-Goymarey-System.git
   cd -Goymarey-System
   ```

2. **Install Dependencies**
   - **Frontend**
     ```bash
     cd frontend
     npm install
     ```

   - **Backend**
     ```bash
     cd backend
     npm install
     ```

3. **Configure Database**
   - Set up PostgreSQL and update the database configurations in the `.env` file in the backend directory.

4. **Run Migrations**
   ```bash
   npx sequelize-cli db:migrate
   ```

5. **Start the Development Server**
   - **Frontend**
     ```bash
     npm start
     ```
   - **Backend**
     ```bash
     npm run dev
     ```
---
## Usage Guidelines

### Internal Use

- **Dashboard Navigation**: Utilize the dashboard to get an overview of all projects and quick access to key areas.
- **Task Management**: Create and assign tasks, set priorities, and track progress through the task management system.
- **Milestone Tracking**: Use the visual progress bar to monitor milestones and ensure project timelines are met.
- **Time Tracking**: Log hours spent on tasks and generate timesheets for review.
---
### Client Use

- **Project Overview**: Clients can log in to view the progress of their projects, including timelines and deliverables.
- **Feedback and Approvals**: Clients can provide feedback and approve milestones through a dedicated section.
- **Invoicing and Payments**: Clients can process payments directly through the integrated payment system.
---
## Contributing
We welcome contributions from the community. Please follow the guidelines outlined in the `CONTRIBUTING.md` file.

## License
This system is the proprietary and confidential property of Goymarey Company. Unauthorized access, replication, or distribution of this system is strictly prohibited and will be handled in court. All rights are legally bound to Goymarey Company.

## Contact Information
For any inquiries or support, please contact:
- **Email**: hassanabdisalan3@gmail.com
- **Phone**: +254 742 222 117

---
