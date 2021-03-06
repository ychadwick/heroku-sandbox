<?php

use Symfony\Component\Config\Loader\LoaderInterface;
use Symfony\Component\HttpKernel\Kernel;

class AppKernel extends Kernel
{
    public function registerBundles()
    {
        $bundles = array(
            new Symfony\Bundle\FrameworkBundle\FrameworkBundle(),
            new Symfony\Bundle\SecurityBundle\SecurityBundle(),
            new Symfony\Bundle\TwigBundle\TwigBundle(),
            new Symfony\Bundle\MonologBundle\MonologBundle(),
            new Symfony\Bundle\SwiftmailerBundle\SwiftmailerBundle(),
            new Doctrine\Bundle\DoctrineBundle\DoctrineBundle(),
            new Sensio\Bundle\FrameworkExtraBundle\SensioFrameworkExtraBundle(),
            // these are the bundles for the CMS
            new Doctrine\Bundle\FixturesBundle\DoctrineFixturesBundle(),
            new JMS\AopBundle\JMSAopBundle(),
            new JMS\DiExtraBundle\JMSDiExtraBundle($this),
            new JMS\SecurityExtraBundle\JMSSecurityExtraBundle(),
            new JMS\SerializerBundle\JMSSerializerBundle($this),
            new Knp\Bundle\MenuBundle\KnpMenuBundle(),
            new Knp\Bundle\PaginatorBundle\KnpPaginatorBundle(),
            new Mopa\Bundle\BootstrapBundle\MopaBootstrapBundle(),
            new FOS\UserBundle\FOSUserBundle(),
            new Sonata\AdminBundle\SonataAdminBundle(),
            new Sonata\UserBundle\SonataUserBundle('FOSUserBundle'),
            new Sonata\DoctrineORMAdminBundle\SonataDoctrineORMAdminBundle(),
            new Sonata\BlockBundle\SonataBlockBundle(),
            new Sonata\EasyExtendsBundle\SonataEasyExtendsBundle(),
            new Sonata\MediaBundle\SonataMediaBundle(),
            new Sonata\CoreBundle\SonataCoreBundle(),
            new Sonata\FormatterBundle\SonataFormatterBundle(),
            new \Sonata\IntlBundle\SonataIntlBundle(),
            new Knp\Bundle\MarkdownBundle\KnpMarkdownBundle(),
            new Knp\Bundle\GaufretteBundle\KnpGaufretteBundle(),
            new Ivory\CKEditorBundle\IvoryCKEditorBundle(),
            new Stof\DoctrineExtensionsBundle\StofDoctrineExtensionsBundle(),
            new Symfony\Cmf\Bundle\RoutingBundle\CmfRoutingBundle(),
            new Ibrows\Bundle\SonataAdminAnnotationBundle\IbrowsSonataAdminAnnotationBundle(),
            new Lexik\Bundle\TranslationBundle\LexikTranslationBundle(),
            new Ibrows\SonataTranslationBundle\IbrowsSonataTranslationBundle(),
            new Networking\InitCmsBundle\NetworkingInitCmsBundle(),
            new Application\Networking\InitCmsBundle\ApplicationNetworkingInitCmsBundle(),
        );

        if (in_array($this->getEnvironment(), array('dev', 'test'))) {
            $bundles[] = new Symfony\Bundle\WebProfilerBundle\WebProfilerBundle();
            $bundles[] = new Sensio\Bundle\DistributionBundle\SensioDistributionBundle();
            $bundles[] = new Sensio\Bundle\GeneratorBundle\SensioGeneratorBundle();
            $bundles[] = new Symfony\Bundle\DebugBundle\DebugBundle();
        }

        return $bundles;
    }

    public function registerContainerConfiguration(LoaderInterface $loader)
    {
        $loader->load(__DIR__ . '/config/config_' . $this->getEnvironment() . '.yml');
    }

    /**
     * {@inheritdoc}
     */
    public function getCacheDir()
    {
        $environment = getenv("PLATFORM_ENVIRONMENT");

        if (!$environment) {
            return parent::getCacheDir();
        }
        return $this->rootDir . '/cache/' . $environment . '/' . $this->environment;
    }
}
