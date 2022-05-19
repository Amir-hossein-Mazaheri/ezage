function ProductionOnly() {
  return (
    target: ProductionConfig,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) => {
    const original = descriptor.value;

    descriptor.value = function (...args: any[]) {
      if (!target.isProduction()) return;
      original.apply(target, args);
    };

    return descriptor;
  };
}

function AutoBind(targetObject?: Object) {
  return (
    target: Object,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) => {
    const original = descriptor.value;
    descriptor.value = function (...args: any[]) {
      original.bind(targetObject || target, args)();
    };

    return descriptor;
  };
}

class ProductionConfig {
  private env: string;

  constructor() {
    this.env = process.env.NODE_ENV;
  }

  getEnv() {
    return this.env;
  }

  isProduction() {
    return this.env === "production";
  }

  @ProductionOnly()
  clearLogs() {
    console.log = () => {
      return;
    };
    console.warn = () => {
      return;
    };
    console.error = () => {
      return;
    };
  }
}

export default ProductionConfig;
