import './index.css'

const AppItem = props => {
  const {imageDetails} = props
  const {appName, imageUrl} = imageDetails

  return (
    <li className="app-container">
      <img src={imageUrl} alt={appName} className="image" />
      <p className="app-name">{appName}</p>
    </li>
  )
}
export default AppItem
