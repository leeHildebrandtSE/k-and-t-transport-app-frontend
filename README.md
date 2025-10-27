# K & T Transport Services - Mobile & Web Application

A comprehensive React Native Web application for K & T Transport Services, providing scheduled school and staff transport in Cape Town and surrounding Western Cape areas.

## 🚌 Features

### User Roles
- **Parents/Guardians**: Book and manage recurring school transport for children
- **Staff/Employees**: Book and manage recurring work transport
- **Drivers**: View assigned routes, schedules, and passenger details
- **Admin**: Manage users, drivers, bookings, payments, and route assignments

### Core Features
- ✅ **Authentication**: Registration & login with phone/email verification
- ✅ **Booking System**: Weekly/monthly recurring trips with pickup/drop-off selection
- ✅ **Real-time Tracking**: GPS map integration with live driver location updates
- ✅ **Push Notifications**: Trip reminders, driver arrivals, and payment alerts
- ✅ **Trip Management**: Modify, renew, pause, or cancel bookings
- ✅ **Trip History**: Complete history and receipt generation
- ✅ **Support System**: Chat/ticket-based feedback system
- ✅ **Responsive Design**: Optimized for both desktop and mobile browsers

### Technical Features
- ✅ **Cross-platform**: React Native Web for mobile and web support
- ✅ **Real-time Updates**: WebSocket integration for live tracking
- ✅ **Secure Forms**: Form validation and secure payment handling
- ✅ **Role-based UI**: Separate dashboards for each user type
- ✅ **Modern UI**: Clean design with K&T branding (blue, gold, white)

## 🛠 Technology Stack

- **Frontend**: React Native Web, Expo
- **Navigation**: React Navigation 6
- **UI Components**: React Native Paper
- **Maps**: React Native Maps
- **Notifications**: Expo Notifications
- **Real-time**: Socket.IO Client
- **State Management**: React Hooks
- **Styling**: React Native StyleSheet
- **TypeScript**: Full type safety

## 📱 Project Structure

```
k-and-t-commute-web-app/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── booking/        # Booking-related components
│   │   ├── common/         # Common UI components
│   │   └── tracking/       # Live tracking components
│   ├── screens/            # Screen components
│   │   ├── auth/          # Authentication screens
│   │   └── dashboards/    # Role-based dashboards
│   ├── services/          # API and service layers
│   ├── types/             # TypeScript type definitions
│   └── utils/             # Utility functions and theme
├── assets/                # Static assets (images, icons)
├── App.tsx               # Main application component
├── package.json          # Dependencies and scripts
├── app.json             # Expo configuration
├── tsconfig.json        # TypeScript configuration
└── babel.config.js      # Babel configuration
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Expo CLI (`npm install -g @expo/cli`)
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd k-and-t-commute-web-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Configure environment variables**
   Create a `.env` file in the root directory:
   ```env
   API_BASE_URL=http://localhost:8080/api
   WEBSOCKET_URL=ws://localhost:8080
   GOOGLE_MAPS_API_KEY=your_google_maps_api_key
   ```

4. **Start the development server**
   ```bash
   # For web development
   npm run web
   
   # For mobile development (requires Expo Go app)
   npm start
   
   # For specific platforms
   npm run android
   npm run ios
   ```

### Asset Setup

Replace placeholder asset files in the `assets/` directory:
- `icon.png` - App icon (1024x1024)
- `splash.png` - Splash screen image
- `adaptive-icon.png` - Android adaptive icon
- `favicon.png` - Web favicon

## 🔧 Configuration

### Backend API Integration

The app is designed to work with a Java/Spring Boot backend. Update the API base URL in:
- `src/services/AuthService.ts`
- `src/services/BookingService.ts`
- `src/services/DriverService.ts`
- `src/services/NotificationService.ts`

### WebSocket Configuration

For real-time tracking, configure the WebSocket connection in:
- `src/components/tracking/LiveTrackingMap.tsx`

### Push Notifications

Configure push notifications in:
- `app.json` - Add required permissions
- `src/services/NotificationService.ts` - Update notification handling

### Maps Integration

For Google Maps integration:
1. Get a Google Maps API key
2. Enable Maps SDK for Android/iOS
3. Add the key to your environment configuration
4. Update map configuration in tracking components

## 🎨 Customization

### Branding

Update the theme in `src/utils/theme.ts`:
```typescript
export const colors = {
  primary: '#1E3A8A',     // K&T Blue
  secondary: '#D97706',   // K&T Gold
  background: '#FFFFFF',  // White
  // ... other colors
};
```

### User Roles

Add or modify user roles in `src/types/User.ts`:
```typescript
export type UserRole = 'parent' | 'staff' | 'driver' | 'admin' | 'newRole';
```

## 📱 Platform-Specific Features

### Web Features
- Responsive design for desktop browsers
- Browser notification support
- Progressive Web App (PWA) capabilities

### Mobile Features
- Native push notifications
- GPS location services
- Background location tracking (drivers)
- Offline support for critical features

## 🔐 Security Features

- JWT-based authentication
- Secure API communication
- Form validation and sanitization
- Role-based access control
- Encrypted local storage

## 🧪 Testing

```bash
# Run tests
npm test

# Run linting
npm run lint

# Type checking
npx tsc --noEmit
```

## 📦 Building for Production

### Web Build
```bash
npm run build
```

### Mobile Build
```bash
# Android
expo build:android

# iOS
expo build:ios
```

## 🚀 Deployment

### Web Deployment
The web build can be deployed to any static hosting service:
- Netlify
- Vercel
- AWS S3 + CloudFront
- GitHub Pages

### Mobile Deployment
- **Android**: Google Play Store
- **iOS**: Apple App Store
- **Web**: PWA through browser

## 🔧 Backend API Requirements

The frontend expects a REST API with the following endpoints:

### Authentication
- `POST /api/auth/login`
- `POST /api/auth/register`
- `POST /api/auth/refresh`
- `GET /api/auth/me`
- `POST /api/auth/logout`

### Bookings
- `GET /api/bookings`
- `POST /api/bookings`
- `PUT /api/bookings/:id`
- `DELETE /api/bookings/:id`
- `GET /api/routes`

### Driver Operations
- `GET /api/driver/routes`
- `GET /api/driver/trips`
- `POST /api/driver/trips/:id/start`
- `POST /api/driver/location`

### Admin Operations
- `GET /api/admin/users`
- `GET /api/admin/bookings`
- `GET /api/admin/drivers`
- `GET /api/admin/analytics`

### WebSocket Events
- `driver-location-update`
- `trip-status-update`
- `booking-confirmed`
- `payment-reminder`

## 🐛 Troubleshooting

### Common Issues

1. **Metro bundler issues**: Clear cache with `expo start -c`
2. **Module resolution**: Ensure all dependencies are installed
3. **Maps not loading**: Verify Google Maps API key
4. **Push notifications not working**: Check permissions and device settings
5. **WebSocket connection fails**: Verify backend WebSocket server is running

### Development Tips

- Use `console.log` sparingly; use React Native Debugger instead
- Test on both Android and iOS for mobile features
- Use Chrome DevTools for web debugging
- Enable hot reloading for faster development

## 📄 License

This project is proprietary to K & T Transport Services.

## 🤝 Contributing

1. Follow the existing code style and conventions
2. Write meaningful commit messages
3. Test thoroughly on multiple platforms
4. Update documentation for new features

## 📞 Support

For technical support or questions:
- Create an issue in the repository
- Contact the development team
- Check the troubleshooting section above

---

**K & T Transport Services** - Reliable, Safe, and Professional Transport Solutions in Cape Town and the Western Cape.