import 'codemirror/lib/codemirror.css'
import '@toast-ui/editor/dist/toastui-editor.css'
import { Editor } from '@toast-ui/react-editor'
import React, { useEffect } from 'react'

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

const MarkdownEditor = () => {
  // https://nhn.github.io/tui.editor/latest/ToastUIEditor
  var editorRef = React.createRef<Editor>()

  useEffect(()=> {
    editorRef.current.getInstance().getUI().getModeSwitch().hide()
  }, [])
  
  return (
        <Editor
          initialValue="궁금한 내용을 질문해주세요"
          previewStyle="vertical"
          height="auto"
          initialEditType="wysiwyg"
          useCommandShortcut={true}
          usageStatistics={false}
          ref={editorRef} />
  )
}

export default MarkdownEditor