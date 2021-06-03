import 'codemirror/lib/codemirror.css'
import '@toast-ui/editor/dist/toastui-editor.css'
import { Editor } from '@toast-ui/react-editor'
import React, { useEffect, useState } from 'react'


// MIT License

// Copyright (c) 2020 NHN Corp.

// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

type EditorProps = {
    height:string
    minHeight:string
    initialEditType:string
    editorRef:React.RefAttributes<Editor>,
    initialValue:string
}

const MarkdownEditor = (EditorProp) => {
  // https://nhn.github.io/tui.editor/latest/ToastUIEditor
  const { height, minHeight, initialEditType, editorRef, initialValue} = EditorProp

  useEffect(()=> {
    editorRef.current.getInstance().getUI().getModeSwitch().hide()
    // console.log(editorRef.current.getInstance().getCodeMirror().getValue())
    // AddImagebutton 제거
    // editorRef.current.getInstance().getUI().getToolbar().removeItem(15)
    // editorRef.current.getInstance().getUI().getToolbar().insertItem(15, "test")    
  }, [])
  
  const uploadImage = (blob) => { // 06. 01.
    // 여기서 image url 변환하고 반환
    console.log(blob)
    return "www.this.com"
  }

  return (
        <Editor
          initialValue={initialValue}
          previewStyle="vertical"
          height={height}
          minHeight={minHeight}
          initialEditType={initialEditType}
          useCommandShortcut={true}
          usageStatistics={false}
          hooks = {
            {
              addImageBlobHook: async(blob, callback) => {
                const uploadedImageURL = await uploadImage(blob)
                callback(uploadedImageURL, "description")
                return false
              }
            }
          }
          ref={editorRef}/>
  )
  
}

MarkdownEditor.defaultProps = {
    height:"auto",
    minHeight:"120px",
    initialEditType:"markdown", // or wysiwyg
    editorRef:React.createRef<Editor>(),
    initialValue:""
}

export default MarkdownEditor