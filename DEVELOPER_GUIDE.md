# NextCore - Developer Guide & Architecture

Welcome to the NextCore Frontend Project. This guide explains the "Less Code, Best Practices" architecture set up for this Next.js + React + Tailwind + TypeScript application, specifically designed to connect with a Laravel API.

---

## 📂 Folder Structure

```text
src/
├── app/                  # Next.js App Router (Pages, Layouts, Routing)
├── components/           # Reusable UI
│   ├── ui/               # Basic dumb components (Buttons, Inputs, Cards)
│   └── layout/           # Structural components (Navbar, Footer, Sidebar)
├── lib/                  # Utilities and Core Logic
│   ├── api.ts            # Core API Client wrapper
│   └── utils.ts          # Helper functions (e.g., Tailwind class merging)
├── store/                # Redux State Management
│   ├── slices/           # Feature slices (authSlice, etc.)
│   ├── store.ts          # Store configuration
│   └── hooks.ts          # Typed useAppDispatch & useAppSelector
└── types/                # Global TypeScript definitions
```

---

## 🌐 API System (Best Practice)

We have created a powerful, centralized API wrapper in `src/lib/api.ts` using the native `fetch` API. It automatically:
1. Attaches the **Bearer Token** from Redux/LocalStorage.
2. Sets `Content-Type: application/json`.
3. Handles Laravel JSON responses and errors.

### How to use the API (Less Code Method)

You do **not** need to manually add headers or tokens every time. Just import `api`:

```typescript
import { api } from '@/lib/api';
import { User, ApiResponse } from '@/types';

// GET Request
const fetchUsers = async () => {
  const response = await api.get<ApiResponse<User[]>>('/users');
  console.log(response.data);
};

// POST Request
const createUser = async (userData) => {
  const response = await api.post<ApiResponse<User>>('/users', userData);
  console.log('Created!', response.data);
};
```

---

## 🧠 State Management (Redux)

Use Redux **only** for global states like User Authentication, Themes, or Shopping Carts. 
For component-specific states (like open/close menus), use React's `useState`.

**Updating Global State:**
```tsx
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { setCredentials } from '@/store/slices/authSlice';

export default function LoginButton() {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.auth.user);

  const handleLogin = () => {
    // Save token globally & in local storage instantly
    dispatch(setCredentials({ token: '12345', user: { name: 'Ali' } }));
  };
}
```

---

## 🎨 Styling (Tailwind CSS)

Follow the utility-first approach. 
- Use standard Tailwind classes directly in `className`.
- Do **not** write custom CSS in `globals.css` unless it's a root variable or a global font definition.
- Use `cn()` from `src/lib/utils.ts` if you need to merge conditional classes cleanly.

```tsx
import { cn } from '@/lib/utils';

<button className={cn(
  "px-4 py-2 rounded transition-all", 
  isActive ? "bg-blue-500 text-white" : "bg-transparent text-gray-500"
)}>
  Click Me
</button>
```

---

## ⚠️ Important Rules for Next.js App Router

1. **Server vs Client Components:** Next.js defaults to Server Components. 
   - If your component uses `useState`, `useEffect`, `onClick`, or Redux (`useAppSelector`), you **MUST** put `"use client";` at the very top of the file.
2. **Environment Variables:** Define your Laravel API URL in `.env.local`:
   ```env
   NEXT_PUBLIC_API_URL=http://localhost:8000/api
   ```




src/components/landing/ folder mein nayi file banayein (jaise FeaturesSection.tsx).
Phir apni src/app/page.tsx file mein usay is tarah add kar lein:





{
  "themeName": "ScraperDesks Neon Dark",
  "colors": {
    "backgrounds": {
      "mainBg": "#0a0a0a",
      "cardBg": "#111111",
      "cardBgHover": "#161616",
      "inputBg": "#0f1115",
      "tableRowAlt": "rgba(255, 255, 255, 0.02)"
    },
    "accents": {
      "primaryNeonGreen": "#ccff00",
      "secondaryGreenHover": "#b3e600",
      "faintGreenGlow": "rgba(204, 255, 0, 0.05)",
      "badgeGreenBg": "rgba(204, 255, 0, 0.1)"
    },
    "text": {
      "pureWhite": "#ffffff",
      "pureBlack": "#000000",
      "lightGrayHeading": "#e4e4e7",
      "mediumGrayBody": "#a1a1aa",
      "mutedGrayMuted": "#71717a",
      "neonGreenText": "#ccff00"
    },
    "borders": {
      "lightBorder": "rgba(255, 255, 255, 0.06)",
      "mediumBorder": "rgba(255, 255, 255, 0.12)",
      "neonBorderActive": "rgba(204, 255, 0, 0.5)"
    }
  }
}