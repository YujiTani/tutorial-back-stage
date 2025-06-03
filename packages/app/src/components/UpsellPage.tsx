import React from 'react';
import {
  Content,
  Header,
  Page,
  HeaderLabel,
} from '@backstage/core-components';
import {
  Card,
  CardContent,
  Typography,
  Button,
  Grid,
  Box,
  Chip,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import StarIcon from '@material-ui/icons/Star';

const useStyles = makeStyles((theme) => ({
  hero: {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
    padding: theme.spacing(6),
    borderRadius: theme.spacing(2),
    marginBottom: theme.spacing(4),
    textAlign: 'center',
  },
  planCard: {
    height: '100%',
    position: 'relative',
    transition: 'transform 0.2s ease-in-out',
    '&:hover': {
      transform: 'translateY(-4px)',
    },
  },
  popularBadge: {
    position: 'absolute',
    top: -10,
    right: 20,
    backgroundColor: '#ff6b35',
    color: 'white',
  },
  feature: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(1),
  },
  featureIcon: {
    color: '#4caf50',
    marginRight: theme.spacing(1),
  },
  priceText: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: theme.palette.primary.main,
  },
  ctaButton: {
    marginTop: theme.spacing(2),
    padding: theme.spacing(1.5, 4),
    fontSize: '1.1rem',
    fontWeight: 'bold',
  },
}));

export const UpsellPage = () => {
  const classes = useStyles();

  const plans = [
    {
      name: 'スタンダード',
      price: '¥5,000',
      period: '/ 月',
      description: '小規模チーム向け',
      features: [
        '最大 10 ユーザー',
        'ベーシック分析',
        'メールサポート',
        '標準テンプレート',
      ],
      buttonText: '現在のプラン',
      buttonVariant: 'outlined' as const,
      disabled: true,
    },
    {
      name: 'プロフェッショナル',
      price: '¥15,000',
      period: '/ 月',
      description: '成長企業向け',
      features: [
        '最大 50 ユーザー',
        '高度な分析とレポート',
        '優先サポート',
        'カスタムテンプレート',
        'API アクセス',
        'シングルサインオン (SSO)',
      ],
      buttonText: 'アップグレード',
      buttonVariant: 'contained' as const,
      popular: true,
    },
    {
      name: 'エンタープライズ',
      price: '要相談',
      period: '',
      description: '大企業向け',
      features: [
        '無制限ユーザー',
        'エンタープライズ分析',
        '専任サポート',
        'フルカスタマイズ',
        '高度なセキュリティ',
        'オンプレミス対応',
        'SLA 保証',
      ],
      buttonText: '営業に相談',
      buttonVariant: 'outlined' as const,
    },
  ];

  return (
    <Page themeId="tool">
      <Header title="プレミアムプラン" subtitle="より多くの機能でチームの生産性を向上">
        <HeaderLabel label="アップグレード" value="特別価格" />
      </Header>
      <Content>
        <Box className={classes.hero}>
          <Typography variant="h3" gutterBottom>
            プレミアムプランで可能性を広げよう
          </Typography>
          <Typography variant="h6">
            より多くの機能と優先サポートで、チームの生産性を最大化
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {plans.map((plan, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card className={classes.planCard}>
                {plan.popular && (
                  <Chip
                    icon={<StarIcon />}
                    label="人気"
                    className={classes.popularBadge}
                  />
                )}
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    {plan.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" gutterBottom>
                    {plan.description}
                  </Typography>
                  <Box display="flex" alignItems="baseline" marginY={2}>
                    <Typography className={classes.priceText}>
                      {plan.price}
                    </Typography>
                    <Typography variant="body1" color="textSecondary">
                      {plan.period}
                    </Typography>
                  </Box>
                  <Box marginY={3}>
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className={classes.feature}>
                        <CheckCircleIcon className={classes.featureIcon} />
                        <Typography variant="body2">{feature}</Typography>
                      </div>
                    ))}
                  </Box>
                  <Button
                    variant={plan.buttonVariant}
                    color="primary"
                    fullWidth
                    className={classes.ctaButton}
                    disabled={plan.disabled}
                  >
                    {plan.buttonText}
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Box mt={6} textAlign="center">
          <Typography variant="h5" gutterBottom>
            よくある質問
          </Typography>
          <Grid container spacing={2} justify="center">
            <Grid item xs={12} md={8}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    プラン変更はいつでも可能ですか？
                  </Typography>
                  <Typography variant="body2">
                    はい、いつでもプランの変更が可能です。アップグレードは即座に反映され、ダウングレードは次回請求サイクルから適用されます。
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Content>
    </Page>
  );
};