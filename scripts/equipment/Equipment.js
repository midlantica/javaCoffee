export const EquipmentHtml = equipmentObject => {
  return `
    <div class="panel">
      <h6>${equipmentObject.model}</h6>
      <p>Serial Number: ${equipmentObject.serialNumber}</p>
      <p>Working?: ${equipmentObject.isFunctional ? '😇' : '😢'}</p>
      <p>Under warranty?: ${equipmentObject.isUnderWarranty ? '✅' : '😡'}</p>
    </div>
  `
}
