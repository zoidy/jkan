export default (data) => (
`<dataset>
  <h3><a href="${data.url}">${data.title}</a></h3>
  ${data.notes.length > 300 ? data.notes.substring(0,300) + '...' : data.notes || ''}
</dataset>`
)
