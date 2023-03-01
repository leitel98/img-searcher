import { useState } from 'react'
import { Formik, Form, Field } from 'formik'
import './header.css'
import './content.css'
import './article.css'

const App =()=> { 
  const[photos, setPhotos] = useState([])
  const open = url => window.open(url)
  console.log({photos})
  return (
    <div>
      <header>
        <Formik
          initialValues={{ search:'' }}
          // AQUI LLAMA A LA API
          onSubmit={async values => {
            // AQUI HACE LA QUERY: await fetch(`url query=values.search`,{headers{Auth:Client-ID}})
            const response = await fetch(`https://api.unsplash.com/search/photos?per_page=20&query=${values.search}`, {
              headers: {
                'Authorization': 'Client-ID 9Vq682G91HvEl15dZUpe5jvbaQAgCvJJkOKtqG6f4YY'
              }
            })
            const data= await response.json()
            setPhotos(data.results)
          }}
          >
            <Form>
              <h1 className='title'>Search</h1>
              <Field name="search" placeholder="Write here"/>
            </Form>
        </Formik>
      </header>
      <div className='container'>
        <div className='center'>
          {photos.map(photo =>
            <article key={photo.id} onClick={() => open(photo.links.html)}>
              <img src={photo.urls.regular} alt='none' />
              <p>{[photo.description, photo.alt_description].join(' -')}</p>
            </article>)}
        </div>
      </div>
    </div>
  )
}

export default App
