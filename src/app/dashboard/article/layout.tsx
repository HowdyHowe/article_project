export default function LayoutArticle({ children }: {children: React.ReactNode}) {
    return (
        <div className="flex items-center justify-center w-full h-screen text-2xl font-semibold">
            {children}
        </div>
    );
}