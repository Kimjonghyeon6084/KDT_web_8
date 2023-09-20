import '../src/0919_practice_1.css'
import IMG from './pngwing.com.png'

const PracticeComponent = () => {
  
  return (
    <div class="Larvacontainer">
      <h3>애벌레를 아시나요?</h3>
      <div class="circle item1"></div>
      <div class="circle eye1"></div>
      <div class="circle eye2"></div>
      <div class="circle item2"></div>
      <div class="circle item3"></div>
      <div class="circle item4"></div>
      <div class="circle item5"></div>
      <img src={ IMG } alt="" />
    </div>
  )
}

export default PracticeComponent