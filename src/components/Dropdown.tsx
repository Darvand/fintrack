import { Dimensions, FlatList, Modal, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState, useRef } from "react";
import colorsStyle from "../../styles/colors.style";

interface DropdownProps {
  label: string;
  data: Array<{ label: string; value: string }>;
  onSelect: (item: { label: string; value: string }) => void;
}

export default function Dropdown({ label, data, onSelect }: DropdownProps) {
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState<DropdownProps["data"][0]>();
  const [dropdownStyles, setDropdownStyles] = useState({});
  const dropdownRef = useRef(null);

  const toggleDropdown = (): void => {
    visible ? setVisible(false) : openDropdown();
  };

  const onItemPress = (item: any): void => {
    setSelected(item);
    onSelect(item);
    setVisible(false);
  };

  const openDropdown = (): void => {
    (dropdownRef.current as any).measure((_fx: number, _fy: number, _w: number, h: number, _px: number, py: number) => {
      console.log(`_fx: ${_fx}, _fy: ${_fy}, _w: ${_w}, h: ${h}, _px: ${_px}, py: ${py}`);
      setDropdownStyles({ top: py + 15, marginLeft: (Dimensions.get("window").width - _w) / 2, width: _w });
    });
    setVisible(true);
  };
  const renderItem = ({ item }: { item: { label: string } }): React.ReactElement<any, any> => (
    <TouchableOpacity style={styles.item} onPress={() => onItemPress(item)}>
      <Text style={styles.itemText}>{item.label}</Text>
    </TouchableOpacity>
  );

  return (
    <TouchableOpacity style={styles.button} onPress={toggleDropdown} ref={dropdownRef}>
      {visible && (
        <Modal transparent>
          <View style={[styles.dropdown, { ...dropdownStyles }]}>
            <FlatList data={data} renderItem={renderItem} keyExtractor={(item, index) => index.toString()} />
          </View>
        </Modal>
      )}
      <Text style={styles.buttonText}>{(selected && selected.label) || label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colorsStyle.white,
    height: 50,
    width: "100%",
    zIndex: 10,
    borderRadius: 10,
  },
  buttonText: {
    flex: 1,
    textAlign: "center",
  },
  dropdown: {
    backgroundColor: colorsStyle.info,
    width: "100%",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    paddingHorizontal: 10,
  },
  item: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  itemText: {
    color: colorsStyle.primary,
    textAlign: "center",
  },
});
