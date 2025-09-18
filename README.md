# Campus Chirp 🐦

A full-stack social media platform built exclusively for college students to connect, share experiences, and engage with their campus community in real-time.

## 🎯 Overview

Campus Chirp bridges the gap between students across campus by providing a dedicated space for academic discussions, event sharing, study groups, and campus life updates. Built with modern web technologies, it delivers a seamless social experience tailored specifically for the college environment.

## ✨ Key Features

### Core Social Features
- **User Authentication System**: Secure JWT-based registration, login, and session management
- **Dynamic Post Creation**: Rich text posts with multimedia support
- **Media Sharing**: Upload and share images, documents, and study materials
- **Interactive Engagement**: Like, comment, and reply to posts with real-time updates
- **Personalized Profiles**: Customizable user profiles with academic information

### Campus-Focused Tools
- **Campus Feed**: Tailored content algorithm showing relevant campus activities
- **Study Groups**: Connect with classmates for collaborative learning
- **Event Sharing**: Discover and share campus events and activities
- **Academic Discussions**: Subject-specific channels for course-related conversations

## 🛠️ Technical Architecture

### Frontend
- **React.js**: Modern component-based UI with hooks and context API
- **Responsive Design**: Mobile-first approach ensuring accessibility across devices
- **Real-time Updates**: Dynamic content loading and live interaction updates

### Backend
- **Node.js + Express.js**: RESTful API architecture with middleware for authentication
- **JWT Authentication**: Secure token-based user sessions
- **File Upload System**: Multer integration for image and document handling
- **Data Validation**: Comprehensive input validation and error handling

### Database
- **MongoDB**: NoSQL database optimized for social media data structures
- **Mongoose ODM**: Schema validation and relationship management
- **Indexing**: Optimized queries for fast content retrieval

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- MongoDB (local installation or MongoDB Atlas)
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/campus-chirp.git
   cd campus-chirp
   ```

2. **Install backend dependencies**
   ```bash
   cd backend
   npm install
   ```

3. **Install frontend dependencies**
   ```bash
   cd ../frontend
   npm install
   ```

4. **Environment Configuration**
   
   Create a `.env` file in the backend directory:
   ```env
   MONGODB_URI=mongodb://localhost:27017/campuschirp
   JWT_SECRET=your_super_secure_jwt_secret_key_here
   PORT=5000
   NODE_ENV=development
   CLOUDINARY_CLOUD_NAME=your_cloudinary_name (optional)
   CLOUDINARY_API_KEY=your_api_key (optional)
   CLOUDINARY_API_SECRET=your_api_secret (optional)
   ```

5. **Database Setup**
   ```bash
   # Make sure MongoDB is running locally, or use MongoDB Atlas
   # The app will create the database automatically on first run
   ```

6. **Start the application**
   
   **Backend server** (from backend directory):
   ```bash
   npm run dev
   ```
   
   **Frontend development server** (from frontend directory):
   ```bash
   npm start
   ```

7. **Access the application**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000

### Quick Start Commands
```bash
# Install all dependencies (run from root)
npm run install-all

# Start both servers concurrently (if configured)
npm run dev

# Build for production
npm run build
```

## 📁 Project Structure

```
campus-chirp/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   └── utils/
│   ├── public/
│   └── package.json
├── backend/
│   ├── routes/
│   ├── models/
│   ├── middleware/
│   ├── controllers/
│   └── package.json
├── README.md
└── .gitignore
```

## 🎯 Target Impact

- **Projected Users**: 30,000+ college students
- **Scalability**: Built for campus-wide deployment
- **Performance**: Optimized for high-traffic academic periods
- **Cloud Ready**: Prepared for Google Cloud Platform deployment

## 🔧 Available Scripts

### Frontend
- `npm start` - Start development server
- `npm build` - Build for production
- `npm test` - Run test suite

### Backend
- `npm run dev` - Start server with nodemon
- `npm start` - Start production server
- `npm test` - Run API tests

## 🤝 Contributing

We welcome contributions from the community! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Commit your changes**: `git commit -m 'Add amazing feature'`
4. **Push to the branch**: `git push origin feature/amazing-feature`
5. **Open a Pull Request**

### Development Guidelines
- Follow existing code style and conventions
- Write meaningful commit messages
- Add tests for new features
- Update documentation as needed

## 🐛 Issue Reporting

Found a bug? Please create an issue with:
- Clear description of the problem
- Steps to reproduce
- Expected vs actual behavior
- Screenshots if applicable

## 📈 Future Enhancements

- [ ] Real-time messaging system
- [ ] Campus event calendar integration
- [ ] Study group matching algorithm
- [ ] Mobile app development (React Native)
- [ ] Integration with campus LMS systems
- [ ] Advanced content moderation
- [ ] Analytics dashboard for campus engagement

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built during academic studies at University of Massachusetts Amherst
- Inspired by the need for better campus communication tools
- Special thanks to the open-source community

---

**Built with ❤️ for college communities everywhere**

*Connect with me on [LinkedIn](https://linkedin.com/in/rishikmuthyala) | Check out my other projects on [GitHub](https://github.com/rishikmuthyala)*
