export default function LayoutAuth({ children }: {children: React.ReactNode}) {
    return (
        <div className="flex items-center justify-center w-full h-screen bg-[#F3F4F6]">
            {children}
        </div>
    );
}