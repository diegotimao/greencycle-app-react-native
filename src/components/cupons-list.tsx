import { ScrollView, View } from "react-native";
import CuponItem from "./cupon-item";
import { itemCupon } from '@/utils/items-cupon';

export default function CuponsList() {
  return (
    <ScrollView className="p-5 pt-1">
      <View className="gap-3 mb-5">
        {itemCupon.map(item => (
          <CuponItem
            key={item.imageLogo}
            logoSource={item.imageLogo}
            onPress="Desejo este cupon do mec"
            valueDiscont={item.valueDiscont}
            company={item.company}
            expiredIn={item.validade}
          />
        ))}
      </View>
    </ScrollView>
  )
}