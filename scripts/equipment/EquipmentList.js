import { EquipmentHtml } from './Equipment.js'
import { useEquipment } from './EquipmentDataProvider.js'

const contentTarget = document.querySelector('.equipmentContent')
export const EquipmentList = () => {
  const EquipmentItems = useEquipment()

  for (const equipItem of EquipmentItems) {
    contentTarget.innerHTML += EquipmentHtml(equipItem)
  }
}
