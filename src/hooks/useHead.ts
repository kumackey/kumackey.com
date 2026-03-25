import { useEffect } from "react";

interface HeadProps {
	title: string;
	description: string;
	path: string;
}

const BASE_URL = "https://kumackey.com";

export function useHead({ title, description, path }: HeadProps) {
	useEffect(() => {
		const url = `${BASE_URL}${path}`;

		document.title = title;

		const updates: Record<string, string> = {
			'meta[name="description"]': description,
			'meta[property="og:title"]': title,
			'meta[property="og:description"]': description,
			'meta[property="og:url"]': url,
			'meta[name="twitter:title"]': title,
			'meta[name="twitter:description"]': description,
		};

		for (const [selector, content] of Object.entries(updates)) {
			const el = document.querySelector(selector);
			if (el) el.setAttribute("content", content);
		}

		let canonical = document.querySelector(
			'link[rel="canonical"]',
		) as HTMLLinkElement | null;
		if (canonical) {
			canonical.href = url;
		} else {
			canonical = document.createElement("link");
			canonical.rel = "canonical";
			canonical.href = url;
			document.head.appendChild(canonical);
		}
	}, [title, description, path]);
}
