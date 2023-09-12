import {createDrawerNavigator} from "@react-navigation/drawer";
import {AppRoutes} from "./app.routes";
import {MainBottomTab} from "./main.bottomtab";

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name={AppRoutes.BOTTOM_NAV}
        component={MainBottomTab}
        options={{
          headerShown: false,
        }}
      />
    </Drawer.Navigator>
  );
};
