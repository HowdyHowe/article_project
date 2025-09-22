import { EditorContent, useEditor } from "@tiptap/react";
import SmarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import TextAlign from "@tiptap/extension-text-align";
import { LuAlignCenter, LuAlignJustify, LuAlignLeft, LuAlignRight, LuBold, LuImage, LuItalic, LuRedo, LuUndo } from "react-icons/lu";

type TipTapEditorProps = {
    content?: string,
    onChange?: (value: string) => void,
    placeholder?: string
};

export default function TipTapEditor({content = "", onChange = () => {}}: TipTapEditorProps) {
    const editor = useEditor({
        extensions: [
            SmarterKit,
            Image,
            TextAlign.configure({
                types: ["heading", "paragraph"],
            }),
        ],
        content,
        immediatelyRender: false,
        onUpdate: ({editor}) => {
            onChange(editor.getHTML())
        },
        editorProps: {
            attributes: {
                class: "min-h-[300px] p-4 mx-auto prose prose-sm sm:prose lg:prose-lg xl:prose-2xl focus:outline-none "
            }
        }
    })

    if (!editor) return null;

    // const addImage = () => {
    //     const url = prompt("Enter image URL: ")
    //     if (url) {
    //         editor.chain().focus().setImage({ src: url }).run()
    //     }
    // }

    return (
        <div className="w-full mx-auto">
            <div className="bg-white border border-gray-300 rounded-lg overflow-hidden">
                {/* Button group */}
                <div className="flex flex-row items-center gap-1 p-2 border-b border-gray-200 bg-gray-50">
                    {/* Undo button */}
                    <button
                        type="button"
                        onClick={() => editor.chain().focus().undo().run()}
                        disabled={!editor.can().undo()}
                        title="Undo"
                        className={`p-2 rounded-md hover:bg-gray-200 ${!editor.can().undo() ? "opacity-40": ""}`}
                    >
                        <LuUndo size={16}/>
                    </button>

                    {/* Redo button */}
                    <button
                        type="button"
                        onClick={() => editor.chain().focus().redo().run()}
                        disabled={!editor.can().redo()}
                        title="Undo"
                        className={`p-2 rounded-md hover:bg-gray-200 ${!editor.can().redo() ? "opacity-40": ""}`}
                    >
                        <LuRedo size={16}/>
                    </button>

                    {/* border to separate function */}
                    <div className="w-[1px] h-6 bg-gray-300"/>

                    {/* Bold button */}
                    <button
                        type="button"
                        onClick={() => editor.chain().focus().toggleBold().run()}
                        title="Undo"
                        className={`p-2 rounded-md hover:bg-gray-200 ${!editor.isActive("bold") ? "opacity-40": ""}`}
                    >
                        <LuBold size={16}/>
                    </button>

                    {/* Italic button */}
                    <button
                        type="button"
                        onClick={() => editor.chain().focus().toggleItalic().run()}
                        title="Undo"
                        className={`p-2 rounded-md hover:bg-gray-200 ${!editor.isActive("italic") ? "opacity-40": ""}`}
                    >
                        <LuItalic size={16}/>
                    </button>

                    {/* border to separate function */}
                    <div className="w-[1px] h-6 bg-gray-300"/>

                    {/* Image button */}
                    <button
                        type="button"
                        onClick={() => {
                            const url = prompt("Enter image URL: ")
                            if (url) {
                                editor.chain().focus().setImage({ src: url }).run()
                            }
                        }}
                        title="Undo"
                        className="p-2 ````rounded-md hover:bg-gray-200"
                    >
                        <LuImage size={16}/>
                    </button>

                    {/* Align left button */}
                    <button
                        type="button"
                        onClick={() => editor.chain().focus().setTextAlign("Left").run()}
                        title="Undo"
                        className={`p-2 rounded-md hover:bg-gray-200 ${!editor.isActive({"textAlign": "left"}) ? "opacity-40": ""}`}
                    >
                        <LuAlignLeft size={16}/>
                    </button>

                    {/* Align center button */}
                    <button
                        type="button"
                        onClick={() => editor.chain().focus().setTextAlign("center").run()}
                        title="Undo"
                        className={`p-2 rounded-md hover:bg-gray-200 ${!editor.isActive({"textAlign": "center"}) ? "opacity-40": ""}`}
                    >
                        <LuAlignCenter size={16}/>
                    </button>

                    {/* Align right button */}
                    <button
                        type="button"
                        onClick={() => editor.chain().focus().setTextAlign("right").run()}
                        title="Undo"
                        className={`p-2 rounded-md hover:bg-gray-200 ${!editor.isActive({"textAlign": "right"}) ? "opacity-40": ""}`}
                    >
                        <LuAlignRight size={16}/>
                    </button>

                    {/* Align justify button */}
                    <button
                        type="button"
                        onClick={() => editor.chain().focus().setTextAlign("justify").run()}
                        title="Undo"
                        className={`p-2 rounded-md hover:bg-gray-200 ${!editor.isActive({"textAlign": "justify"}) ? "opacity-40": ""}`}
                    >
                        <LuAlignJustify size={16}/>
                    </button>
                </div>

                {/* Text editor */}
                <EditorContent
                    editor={editor}
                    className="min-h-[300px]"
                />

                <div>
                    <p>current content</p>
                    <pre>
                        {editor.getHTML()}
                    </pre>
                </div>
            </div>
        </div>
    )
}