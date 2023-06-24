// Write your code here
import {useState} from 'react'

import {
  LockContainer,
  ImageAndTextContainer,
  Image,
  Text,
  Button,
} from './styledComponents'

const Unlock = () => {
  const [isUnLock, setIsUnLock] = useState(false)

  const imageUrl = isUnLock
    ? 'https://assets.ccbp.in/frontend/hooks/unlock-img.png'
    : 'https://assets.ccbp.in/frontend/hooks/lock-img.png'

  const altText = isUnLock ? 'Unlock' : 'lock'
  const text = isUnLock ? 'Your Device is Unlocked' : 'Your Device is Locked'
  const buttonText = isUnLock ? 'Lock' : 'Unlock'

  const onClickBtn = () => {
    setIsUnLock(prevStatus => !prevStatus)
  }

  return (
    <LockContainer>
      <ImageAndTextContainer>
        <Image src={imageUrl} alt={altText} />
        <Text>{text}</Text>
      </ImageAndTextContainer>
      <Button type="button" onClick={onClickBtn}>
        {buttonText}
      </Button>
    </LockContainer>
  )
}

export default Unlock
