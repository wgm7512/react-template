import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Customer() {
  useEffect(() => {
    // 手机的抽象类
    abstract class Phone {
      name: string;
      price: number;

      constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
      }

      // 打电话功能
      abstract call(): void;
    }
    
    abstract class Laptop {
      name: string;
      price: number;

      constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
      }

      // 打游戏
      abstract game(gameName: string): void;
    }

    class MiPhone extends Phone {
      call() {
        console.log("少林功夫好哎");
      }
    }

    class MiLaptop extends Laptop {
      game(gameName: string) {
        console.log(`小米电脑适合${gameName}`);
      }
    }

    class Mi {
      getPhone(name: string, price: number) {
        return new MiPhone(name, price);
      }

      getLaptop(name: string, price: number) {
        return new MiLaptop(name, price);
      }
    }

    class HuaweiPhone extends Phone {
      call() {
        console.log("少林功夫好哎");
      }
    }

    class HuaweiLaptop extends Laptop {
      game(gameName: string) {
        console.log(`小米电脑适合${gameName}`);
      }
    }

    class Huawei {
      getPhone(name: string, price: number) {
        return new HuaweiPhone(name, price);
      }

      getLaptop(name: string, price: number) {
        return new HuaweiLaptop(name, price);
      }
    }

    const miShop = new Mi();
    const miPhone = miShop.getLaptop("P40", 3600);
    console.log(miPhone);
    
    const huaweiShop = new Huawei();
    const huaweiPhone = huaweiShop.getLaptop("meta 40", 4000);
    console.log(huaweiPhone);

  }, []);

  return (
    <div>
      <h2>Customer Page</h2>

      <Link to="/goods"> to Goods</Link>
    </div>
  );
}