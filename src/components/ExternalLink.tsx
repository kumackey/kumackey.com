type Props = {
	href: string;
	children: React.ReactNode;
};

export function ExternalLink({ href, children }: Props) {
	return (
		<a
			href={href}
			className="text-blue-600 hover:text-blue-800 underline decoration-blue-200 hover:decoration-blue-600 underline-offset-2 transition-colors duration-200"
			target="_blank"
			rel="noopener noreferrer"
		>
			{children}
		</a>
	);
}
