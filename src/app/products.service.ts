import { Injectable } from '@angular/core';
import {ITreeNode} from "./itree-node";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  products: ITreeNode[] = [
    {
      "items": [
        {
          "items": [
            {
              "name": "Капучино 250мл",
              "sale": 60.00,
              'id': 111
            },
            {
              "name": "Капучино 350мл",
              "sale": 90.00,
              'id': 112
            },
            {
              "name": "Капучино 450мл",
              "sale": 120.00,
              'id': 113
            }
          ],
          "name": "Капучино",
          'id': 11
        },
        {
          "items": [
            {
              "name": "Латте 250мл",
              "sale": 60.00,
              'id': 121
            },
            {
              "name": "Латте 350мл",
              "sale": 90.00,
              'id': 122
            },
            {
              "name": "Латте 450мл",
              "sale": 120.00,
              'id': 123
            }
          ],
          "name": "Латте",
          'id': 12
        },
        {
          "items": [
            {
              "name": "Раф 250мл",
              "sale": 120.00,
              'id': 131
            },
            {
              "name": "Раф 350мл",
              "sale": 150.00,
              'id': 132
            },
            {
              "name": "Раф 450мл",
              "sale": 180.00,
              'id': 133
            }
          ],
          "name": "Раф",
          'id': 13
        },
        {
          "items": [
            {
              "name": "Флэт Уайт 250мл",
              "sale": 80.00,
              'id': 141
            },
            {
              "name": "Флэт Уайт 350мл",
              "sale": 100.00,
              'id': 142
            }
          ],
          "name": "Флэт Уайт",
          'id': 14
        },
        {
          "items": [
            {
              "name": "Мокка 350мл",
              "sale": 120.00,
              'id': 151
            }
          ],
          "name": "Мокко",
          'id': 15
        }
      ],
      "name": "Кофе на Молоке",
      "sections": [
        {
          "items": [
            {
              "name": "Капучино 250мл",
              "sale": 60.00
            },
            {
              "name": "Капучино 350мл",
              "sale": 90.00
            },
            {
              "name": "Капучино 450мл",
              "sale": 120.00
            }
          ],
          "name": "Капучино",
          "sections": []
        },
        {
          "items": [
            {
              "name": "Латте 250мл",
              "sale": 60.00
            },
            {
              "name": "Латте 350мл",
              "sale": 90.00
            },
            {
              "name": "Латте 450мл",
              "sale": 120.00
            }
          ],
          "name": "Латте",
          "sections": []
        },
        {
          "items": [
            {
              "name": "Раф 250мл",
              "sale": 120.00
            },
            {
              "name": "Раф 350мл",
              "sale": 150.00
            },
            {
              "name": "Раф 450мл",
              "sale": 180.00
            }
          ],
          "name": "Раф",
          "sections": []
        },
        {
          "items": [
            {
              "name": "Флэт Уайт 250мл",
              "sale": 80.00
            },
            {
              "name": "Флэт Уайт 350мл",
              "sale": 100.00
            }
          ],
          "name": "Флэт Уайт",
          "sections": []
        },
        {
          "items": [
            {
              "name": "Мокка 350мл",
              "sale": 120.00
            }
          ],
          "name": "Мокко",
          "sections": []
        }
      ],
      'id': 1
    },
    {
      "items": [],
      "name": "Кофе по-ирландски",
      "sections": [
        {
          "items": [
            {
              "name": "Капучино 250мл",
              "sale": 60.00
            },
            {
              "name": "Капучино 350мл",
              "sale": 90.00
            },
            {
              "name": "Капучино 450мл",
              "sale": 120.00
            }
          ],
          "name": "Капучино",
          "sections": []
        },
        {
          "items": [
            {
              "name": "Латте 250мл",
              "sale": 60.00
            },
            {
              "name": "Латте 350мл",
              "sale": 90.00
            },
            {
              "name": "Латте 450мл",
              "sale": 120.00
            }
          ],
          "name": "Латте",
          "sections": []
        },
        {
          "items": [
            {
              "name": "Раф 250мл",
              "sale": 120.00
            },
            {
              "name": "Раф 350мл",
              "sale": 150.00
            },
            {
              "name": "Раф 450мл",
              "sale": 180.00
            }
          ],
          "name": "Раф",
          "sections": []
        },
        {
          "items": [
            {
              "name": "Флэт Уайт 250мл",
              "sale": 80.00
            },
            {
              "name": "Флэт Уайт 350мл",
              "sale": 100.00
            }
          ],
          "name": "Флэт Уайт",
          "sections": []
        },
        {
          "items": [
            {
              "name": "Мокка 350мл",
              "sale": 120.00
            }
          ],
          "name": "Мокко",
          "sections": []
        }
      ],
      'id': 789
    },
    {
      "items": [
        {
          "items": [
            {
              "name": "Американо 250мл",
              "sale": 60.00,
              'id': 211
            },
            {
              "name": "Американо 350мл",
              "sale": 90.00,
              'id': 212
            },
            {
              "name": "Американо 450мл",
              "sale": 120.00,
              'id': 213
            }
          ],
          "name": "Американо",
          'id': 21
        },
        {
          "items": [
            {
              "name": "Эспрессо ",
              "sale": 50.00,
              'id': 221
            }
          ],
          "name": "Эспрессо",
          "sections": [],
          'id': 22
        }
      ],
      "name": "Черный Кофе",
      "sections": [
        {
          "items": [
            {
              "name": "Американо 250мл",
              "sale": 60.00
            },
            {
              "name": "Американо 350мл",
              "sale": 90.00
            },
            {
              "name": "Американо 450мл",
              "sale": 120.00
            }
          ],
          "name": "Американо",
          "sections": []
        },
        {
          "items": [
            {
              "name": "Эспрессо ",
              "sale": 50.00
            }
          ],
          "name": "Эспрессо",
          "sections": []
        }
      ],
      'id': 2
    },
    {
      "items": [
        {
          "items": [
            {
              "name": "Какао 250мл",
              "sale": 90.00,
              'id': 311
            },
            {
              "name": "Какао 450мл",
              "sale": 170.00,
              'id': 312
            }
          ],
          "name": "Какао",
          "sections": [],
          'id': 31
        },
        {
          "items": [
            {
              "name": "Чай Облепиховый 250мл",
              "sale": 50.00,
              'id': 321
            },
            {
              "name": "Чай Облепиховый 450мл",
              "sale": 100.00,
              'id': 322
            }
          ],
          "name": "Чай Облепиховый",
          "sections": [],
          'id': 32
        }
      ],
      "name": "Горячие Напитки",
      "sections": [
        {
          "items": [
            {
              "name": "Какао 250мл",
              "sale": 90.00
            },
            {
              "name": "Какао 450мл",
              "sale": 170.00
            }
          ],
          "name": "Какао",
          "sections": []
        },
        {
          "items": [
            {
              "name": "Чай Облепиховый 250мл",
              "sale": 50.00
            },
            {
              "name": "Чай Облепиховый 450мл",
              "sale": 100.00
            }
          ],
          "name": "Чай Облепиховый",
          "sections": []
        }
      ],
      'id': 3
    },
    {
      "items": [
        {
          "name": "Большой Сугроб 250мл",
          "sale": 120.00,
          'id': 41
        },
        {
          "name": "Большой Сугроб 450мл",
          "sale": 180.00,
          'id': 42
        }
      ],
      "name": "Сезонные Напитки",
      "sections": [],
      'id': 4
    },
    {
      "items": [
        {
          "items": [
            {
              "name": "Сироп",
              "sale": 20.00,
              'id': 511
            }
          ],
          "name": "Сиропы",
          "sections": [],
          'id': 51
        },
        {
          "items": [
            {
              "name": "Халва ",
              "sale": 20.00,
              'id': 521
            }
          ],
          "name": "Халва",
          "sections": [],
          'id': 52
        },
        {
          "items": [
            {
              "name": "Кокосовое 250мл",
              "sale": 80.00,
              'id': 531
            },
            {
              "name": "Кокосовое 350мл",
              "sale": 90.00,
              'id': 532
            },
            {
              "name": "Кокосовое 450мл",
              "sale": 100.00,
              'id': 533
            },
            {
              "name": "Миндальное 250мл",
              "sale": 80.00,
              'id': 534
            },
            {
              "name": "Миндальное 350мл",
              "sale": 90.00,
              'id': 535
            },
            {
              "name": "Миндальное 450мл",
              "sale": 100.00,
              'id': 536
            },
            {
              "name": "Соевое 250мл",
              "sale": 80.00,
              'id': 537
            },
            {
              "name": "Соевое 350мл",
              "sale": 90.00,
              'id': 538
            },
            {
              "name": "Соевое 450мл",
              "sale": 100.00,
              'id': 539
            }
          ],
          "name": "Молоко",
          "sections": [],
          'id': 53
        }
      ],
      "name": "Добавки",
      "sections": [
        {
          "items": [
            {
              "name": "Сироп",
              "sale": 20.00
            }
          ],
          "name": "Сиропы",
          "sections": []
        },
        {
          "items": [
            {
              "name": "Халва ",
              "sale": 20.00
            }
          ],
          "name": "Халва",
          "sections": []
        },
        {
          "items": [
            {
              "name": "Кокосовое 250мл",
              "sale": 80.00
            },
            {
              "name": "Кокосовое 350мл",
              "sale": 90.00
            },
            {
              "name": "Кокосовое 450мл",
              "sale": 100.00
            },
            {
              "name": "Миндальное 250мл",
              "sale": 80.00
            },
            {
              "name": "Миндальное 350мл",
              "sale": 90.00
            },
            {
              "name": "Миндальное 450мл",
              "sale": 100.00
            },
            {
              "name": "Соевое 250мл",
              "sale": 80.00
            },
            {
              "name": "Соевое 350мл",
              "sale": 90.00
            },
            {
              "name": "Соевое 450мл",
              "sale": 100.00
            }
          ],
          "name": "Молоко",
          "sections": []
        }
      ],
      'id': 5
    }
  ];

  getProducts():ITreeNode[]{
    this.readStorage();
    return this.products;
  }


  addPart(partName: string, parentId?: number): void{
    function getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max));
    }

    const part: ITreeNode = {
      id: getRandomInt(100),
      name: partName,
      items: []
    };
    this.products.push(part)
    //Persist data in localstorage
    this.persistData();
  }

  addPosition(positionName: string, positionPrice: number, parentId?: number): void{
    function getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max));
    }

    const part: ITreeNode = {
      id: getRandomInt(100),
      name: positionName,
      sale: positionPrice
    };
    //Temporary add position inside Irish Coffee
    const tempPartIndex: number = this.products.findIndex(item => item.id === 789)
    this.products[tempPartIndex].items.push(part);
    //Persist data in localstorage
    this.persistData();
  }

  getParts():ITreeNode[]{
    const partList = [];

    function addElem(arr){
      for (const elem of arr){
        if(elem.items && elem.items.length){
          partList.push(elem);
          addElem(elem.items);
        }
      }
    }
    addElem(this.products);

    return partList;
  }

  persistData(){
    localStorage.setItem('myProducts', JSON.stringify(this.products));
  }

  readStorage(){
    const storage = JSON.parse(localStorage.getItem('myProducts'));
    //Restore products from localstorage
    if(storage) this.products = storage;
  }
}
