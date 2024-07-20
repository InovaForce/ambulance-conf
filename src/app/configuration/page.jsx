import AmbulanceType from '@/components/configuration/ambulance_type'
import FuelTypeSelector from '@/components/configuration/fuel-type'
import MainStretcher from '@/components/configuration/main_strecher'
import TractionTypeSelector from '@/components/configuration/traction_type'
import VehicleTypeSelector from '@/components/configuration/vehicle_type'
import React from 'react'

const Configuration = () => {
  return (
    <div>

      <FuelTypeSelector />
      <TractionTypeSelector />
      <AmbulanceType />
      <VehicleTypeSelector/>
      <MainStretcher />
    </div>
  )
}

export default Configuration
