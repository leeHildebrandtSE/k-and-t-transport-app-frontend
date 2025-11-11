# Payment Screens Demo Setup

This demo showcases the newly created payment-related screens with their interactive functionality and styling.

## Demo Screens Included

1. **PaymentScreen** - Payment processing with method selection and confirmation
2. **BillingHistoryScreen** - Transaction history with filtering and summary
3. **PaymentMethodsScreen** - Manage payment methods and security settings
4. **RefundRequestScreen** - Request refunds with reason selection and policy info

## Setup Instructions

### Prerequisites

Make sure you have the following dependencies installed:

```bash
npm install @react-navigation/native @react-navigation/stack
npm install react-native-paper react-native-vector-icons
npm install expo-status-bar expo-linear-gradient
npm install @expo/vector-icons
```

### Running the Demo

#### Option 1: Replace the main App.tsx temporarily

```bash
# Backup your current App.tsx
cp App.tsx App.backup.tsx

# Copy the demo launcher
cp DemoLauncher.tsx App.tsx

# Run the project
npm start
# or
expo start
```

#### Option 2: Add demo navigation to existing app

Add the demo navigation to your existing app by importing and using the DemoApp component:

```typescript
import { DemoApp } from "./src/demo/DemoApp";

// Use DemoApp component in your main navigation or as a modal
```

#### Option 3: Direct screen testing

You can also test individual screens by importing them directly:

```typescript
import { PaymentScreen } from "./src/screens/PaymentScreen";
import { BillingHistoryScreen } from "./src/screens/BillingHistoryScreen";
// etc.
```

## Demo Features

- **Interactive Navigation**: Navigate between all payment screens
- **Mock Data**: Pre-populated with realistic test data
- **Form Validation**: Working form validation and error handling
- **Loading States**: Simulated API calls with loading indicators
- **Responsive Design**: Optimized for different screen sizes
- **Theme Consistency**: All screens follow the established design system

## Demo Flow

1. **Start Screen**: Launch with the demo navigation screen
2. **Payment Flow**: Test the complete payment process
3. **History Review**: Browse transaction history and details
4. **Method Management**: Add/edit/remove payment methods
5. **Refund Process**: Submit refund requests with different reasons

## File Structure

```
src/
├── demo/
│   └── DemoApp.tsx          # Main demo navigation
├── screens/
│   ├── DemoScreen.tsx       # Demo launcher screen
│   ├── PaymentScreen.tsx    # Payment processing
│   ├── BillingHistoryScreen.tsx  # Transaction history
│   ├── PaymentMethodsScreen.tsx  # Payment method management
│   └── RefundRequestScreen.tsx   # Refund requests
└── styles/
    └── screens/
        ├── paymentScreen.ts
        ├── billingHistoryScreen.ts
        ├── paymentMethodsScreen.ts
        └── refundRequestScreen.ts
```

## Technical Notes

- All screens use mock data for demonstration
- TypeScript interfaces are properly defined
- Error handling and validation are implemented
- Loading states and user feedback are included
- Screens follow the established theme architecture
- Ready for API integration when backend is available

## Cleanup

To restore your original app after testing:

```bash
# Restore original App.tsx
cp App.backup.tsx App.tsx

# Remove demo files (optional)
rm -rf src/demo/
rm DemoLauncher.tsx
```

## Troubleshooting

If you encounter navigation issues:

1. Ensure React Navigation dependencies are properly installed
2. Check that all screen imports are correctly resolved
3. Verify that the navigation container is properly wrapped

If styling appears incorrect:

1. Ensure react-native-paper theme is properly configured
2. Check that all theme imports are working
3. Verify that the material icons are properly loaded
