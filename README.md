# Detailed Design Document: Note-Taking Website

## 1. Introduction

### 1.1 Purpose
The purpose of this document is to provide a detailed overview of the design and architecture of the ZenFlow, outlining its features, functionality, and technical specifications.

### 1.2 Scope
The website aims to offer users a platform to create, edit, organize, and search for notes efficiently.

### 1.3 Objectives
- Provide a user-friendly interface for creating and managing notes.
- Implement robust security measures to protect user data.
- Ensure scalability to accommodate future growth.
- Facilitate collaboration for users who wish to share and work on notes together.

## 2. System Overview

### 2.1 System Architecture
The system will follow a client-server architecture with a responsive web-based front end and a  back-end server.

### 2.2 Key Features
- User registration and authentication
- Note creation, editing, and deletion
- Organization and categorization of notes
- Search functionality

### 2.3 User Roles
- Guest
- Registered User

### 2.4 Technologies Used
- Front-end: HTML, CSS, JavaScript (React)
- Back-end: Node.js
- Database: MongoDB
- Authentication: JWT
- Additional tools/libraries as needed.

## 3. Functional Requirements

### 3.1 User Registration and Authentication
- Users can register with valid email addresses.
- Authentication through secure mechanisms (e.g., JWT tokens).
- Password recovery and reset functionality.

### 3.2 Note Creation and Editing
- Users can create new notes with a title and content.
- Rich text editor for formatting options.
- Editing and saving notes with revision history.

### 3.3 Note Organization and Categorization
- Ability to organize notes into folders or tags.
- User-defined categories for better organization.

### 3.4 Search and Retrieval
- Full-text search functionality across notes.
- Advanced search filters (date, category, etc.).

## 4. Database Design
### 4.1 Entity-Relationship Diagram

**User Entity:**
-   **Attributes:**
    -   `UserID` (Primary Key): Unique identifier for each user.
    -   `Username`: User's username for identification.
    -   `Email`: User's email address for communication.
    -   `Password`: Securely stored password for authentication.
  - **Note Entity:**
    -   **Attributes:**
        -   `NoteID` (Primary Key): Unique identifier for each note.
        -   `Title`: Title of the note.
        -   `Content`: Main content of the note.
        -   `CreatedAt`: Timestamp when the note was created.
        -   `UpdatedAt`: Timestamp when the note was last updated.
    -   **Relationships:**
        -   `UserID` (Foreign Key): Relates each note to the user who created it.
        -   `CategoryID` (Foreign Key): Relates each note to a category (if categorized).
- **Category Entity:**
    -   **Attributes:**
        -   `CategoryID` (Primary Key): Unique identifier for each category.
        -   `Name`: Name of the category.
