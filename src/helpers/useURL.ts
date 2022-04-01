import { Ref, ref } from 'vue';

interface UseURLObject {
  get: () => Ref<URL>;
  string: () => string;
  add: UseURLAdder;
}

export default function useURL(initialValue: string): UseURLObject {
  const url = ref<URL>(new URL(initialValue));

  const res = {
    get() {
      return url;
    },
    string() {
      return String(url.value);
    },
    add: new UseURLAdder(url),
  };

  return res;
}

class UseURLAdder extends Function {
  private url: Ref<URL>;

  constructor(url: Ref<URL>) {
    super();

    this.url = url;

    return new Proxy(this, {
      apply: (target, thisArg, argumentList) => {
        if (argumentList.length !== 2) {
          throw new TypeError('You must provide a key and a value');
        }

        const [key, value] = argumentList;

        this.url.value.searchParams.set(key, value);

        return thisArg;
      },
    });
  }

  clientId = this.makeAdder('client_id', process.env.DEMO_KELLY_CLIENT_ID);
  clientSecret = this.makeAdder(
    'client_secret',
    process.env.DEMO_KELLY_CLIENT_SECRET
  );
  redirectURI = this.makeAdder(
    'redirect_uri',
    process.env.GITHUB_OAUTH_REDIRECT_URI
  );

  private makeAdder(key: string, value: string): () => void {
    return () => this.url.value.searchParams.set(key, value);
  }
}
