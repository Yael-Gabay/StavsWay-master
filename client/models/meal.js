 export class Meal {
  constructor(
    id,
    donatorId,
    title,
    amount,
    createdOn,
    imageUrl,
    duration,
    ingredients,
    isGlutenFree,
    isVegan,
    isVegetarian,
    isLactoseFree
  ) {
    this.id = id;
    this.donator = donatorId
    this.title = title;
    this.amount = amount
    this.createdOn = createdOn;
    this.imageUrl = imageUrl;
    this.ingredients = ingredients;
    this.duration = duration;
    this.isGlutenFree = isGlutenFree;
    this.isVegan = isVegan;
    this.isVegetarian = isVegetarian;
    this.isLactoseFree = isLactoseFree;
  }
}



 export class Delivery {
  constructor(
    id,
    sourceLocation,
    targetLocation,
    distanceKm

  ) {
    this.id = id;
    this.sourceLocation = sourceLocation;
    this.targetLocation = targetLocation;
    this.distanceKm = distanceKm
  }
}

