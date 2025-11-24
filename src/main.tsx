import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App.tsx";
import { Family } from "./pages/Family.tsx";
import { KudanshitaSlot } from "./pages/KudanshitaSlot.tsx";

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Root element not found");

createRoot(rootElement).render(
	<StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<App />} />
				<Route path="/family" element={<Family />} />
				<Route path="/kudanshita-slot" element={<KudanshitaSlot />} />
			</Routes>
		</BrowserRouter>
	</StrictMode>,
);
