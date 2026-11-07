# Deploy to AWS Amplify Hosting

## Fastest route: manual Amplify deployment

AWS Amplify Hosting supports manual deployment of a static ZIP.

1. Sign in to the AWS Management Console.
2. Open **AWS Amplify**.
3. Choose **Create new app**.
4. Choose **Deploy without Git**.
5. App name: `systems-superpower-hn`
6. Branch name: `production`
7. Method: **Drag and drop**.
8. Upload `systems-superpower-amplify.zip`.
9. Choose **Save and deploy**.
10. Open the generated `https://production....amplifyapp.com` URL.
11. Verify:
   - hero loads
   - all navigation links scroll correctly
   - all four simulator scenarios run
   - GitHub project links open
   - mobile layout works

The ZIP must contain `index.html` at its root. The included deployment ZIP already follows that structure.

## CLI route

If AWS CLI v2 is already authenticated:

```bash
bash deploy_amplify_cli.sh
```

The script creates a manual Amplify app, uploads a ZIP through the signed deployment URL, starts the deployment, waits for completion and prints the live URL.

## GitHub

Publish the public source separately:

```bash
bash publish_github.sh
```

The challenge requires a GitHub repository link even when Amplify is deployed manually.
