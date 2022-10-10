import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import CategoryCard from './CategoryCard'

const Categories = () => {
  return (
    <ScrollView
    contentContainerStyle={{
      paddingHorizontal: 15,
      paddingTop: 10,
    }}
    horizontal
    showsHorizontalScrollIndicator={false}
    >
      {/* Category card */}

      <CategoryCard imgUrl="https://lh5.googleusercontent.com/p/AF1QipNbnhR8h3JNbwBOdp66O334idhoALkJvtsJ40W2=w740-h420-k-no"  title="Testing 1"/>
      <CategoryCard imgUrl="https://lh5.googleusercontent.com/p/AF1QipNbnhR8h3JNbwBOdp66O334idhoALkJvtsJ40W2=w740-h420-k-no"  title="Testing 1"/>
      <CategoryCard imgUrl="https://lh5.googleusercontent.com/p/AF1QipNbnhR8h3JNbwBOdp66O334idhoALkJvtsJ40W2=w740-h420-k-no"  title="Testing 1"/>
      <CategoryCard imgUrl="https://lh5.googleusercontent.com/p/AF1QipNbnhR8h3JNbwBOdp66O334idhoALkJvtsJ40W2=w740-h420-k-no"  title="Testing 1"/>
      <CategoryCard imgUrl="https://lh5.googleusercontent.com/p/AF1QipNbnhR8h3JNbwBOdp66O334idhoALkJvtsJ40W2=w740-h420-k-no"  title="Testing 1"/>
      <CategoryCard imgUrl="https://lh5.googleusercontent.com/p/AF1QipNbnhR8h3JNbwBOdp66O334idhoALkJvtsJ40W2=w740-h420-k-no"  title="Testing 1"/>

    </ScrollView>
  )
}

export default Categories